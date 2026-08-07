import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const GetToken = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const [type, token] = authHeader?.split(' ');
    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        'Invalid token format. Expected Bearer token',
      );
    }

    return token;
  },
);
