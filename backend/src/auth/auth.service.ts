import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthValidator } from './auth.validator';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly authValidator: AuthValidator,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterUserDto) {
    await this.authValidator.ensureEmailUnique(dto.email);
    const passwordHash = await bcrypt.hash(dto.password, 12);
    const newUser = await this.authRepository.register({
      ...dto,
      password: passwordHash,
    });
    const payload = {
      sub: newUser.id,
      email: newUser.email,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, { expiresIn: '15m' }),
      this.jwtService.signAsync(payload, { expiresIn: '7d' }),
    ]);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDay() + 7);
    await this.authRepository.saveRefreshToken(
      newUser.id,
      refreshToken,
      expiresAt,
    );
    return {
      accessToken,
      refreshToken,
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    };
  }

  async login(dto: LoginUserDto) {
    const user = await this.authRepository.findByEmailWithPassword(dto.email);
    if (!user) throw new UnauthorizedException('Email or password incorrect');
    const comparePassword = await bcrypt.compare(dto.password, user.password);
    if (!comparePassword)
      throw new UnauthorizedException('Email or password incorrect');
    const payload = {
      sub: user.id,
      email: user.email,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, { expiresIn: '15m' }),
      this.jwtService.signAsync(payload, { expiresIn: '7d' }),
    ]);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    await this.authRepository.saveRefreshToken(
      user.id,
      refreshToken,
      expiresAt,
    );

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async logout(refreshToken: string) {
    await this.authRepository.revokeRefreshToken(refreshToken);
    return { message: 'Logged out successfully' };
  }

  async logoutAllDevices(userId: string) {
    await this.authRepository.deleteAllUserRefreshTokens(userId);
    return { message: 'Logged out from all devices' };
  }

  async refresh(refreshToken: string) {
    const storedToken =
      await this.authRepository.findRefreshToken(refreshToken);
    if (!storedToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (storedToken.revokedAt) {
      throw new UnauthorizedException('Refresh token has been revoked');
    }

    if (storedToken.expiresAt <= new Date()) {
      throw new UnauthorizedException('Refresh token has expired');
    }

    const user = await this.authRepository.findById(storedToken.id);
    if (!user) {
      throw new UnauthorizedException('User no longer exists');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };
    const [accessToken, newRefreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    ]);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    await this.authRepository.revokeRefreshToken(refreshToken);
    await this.authRepository.saveRefreshToken(
      user.id,
      newRefreshToken,
      expiresAt,
    );
    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }
}
