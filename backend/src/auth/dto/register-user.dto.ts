// register-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  firstName!: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  lastName!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}