import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags("Users")
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({summary: "Get user"})
    @Get("me")
    getUser() {}
}
