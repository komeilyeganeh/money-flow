import { ConflictException, Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthValidator {
  constructor(private readonly authRepository: AuthRepository) {}

  async ensureEmailUnique(email: string) {
    const user = await this.authRepository.findByEmail(email);
    if (user) {
      throw new ConflictException('Email already exists');
    }
  }
}
