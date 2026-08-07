import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import type { JwtUser } from '../common/types/jwt-user.type';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get user' })
  @Get('me')
  getUser(@CurrentUser() user: JwtUser) {
    return this.userService.getMe(user.id);
  }

  @ApiOperation({ summary: 'Edit user profile' })
  @Patch('me')
  update(@CurrentUser() user: JwtUser, @Body() dto: UpdateUserDto) {
    return this.userService.update(user.id, dto);
  }
}
