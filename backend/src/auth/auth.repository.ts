import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  private readonly userSelect = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    createdAt: true,
  } as const;

  register(dto: RegisterUserDto) {
    return this.prisma.user.create({ data: dto, select: this.userSelect });
  }

  findByEmailWithPassword(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: { ...this.userSelect, password: true },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: this.userSelect,
    });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
  }

  saveRefreshToken(userId: string, token: string, expiresAt: Date) {
    return this.prisma.refreshToken.create({
      data: { userId, token, expiresAt },
    });
  }

  revokeRefreshToken(token: string) {
    return this.prisma.refreshToken.update({
      where: { token },
      data: { revokedAt: new Date() },
    });
  }

  deleteAllUserRefreshTokens(userId: string) {
    return this.prisma.refreshToken.deleteMany({ where: { userId } });
  }
}
