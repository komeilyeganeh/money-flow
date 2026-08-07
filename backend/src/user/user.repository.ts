import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private readonly userSelect = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    createdAt: true,
  } as const;

  getMe(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: this.userSelect,
    });
  }

  update(id: string, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: dto,
      select: this.userSelect,
    });
  }
}
