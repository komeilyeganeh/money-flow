import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @MinLength(2)
  @MaxLength(50)
  @IsOptional()
  firstName?: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;
}
