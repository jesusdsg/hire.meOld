import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonWebTokenError } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    if (info instanceof JsonWebTokenError) {
      if (info.name == 'TokenExpiredError') {
        throw new HttpException(
          {
            status: HttpStatus.CONFLICT,
            error: 'Sesión expirada',
            code: { expired: true },
          },
          HttpStatus.CONFLICT,
        );
      }
      throw new UnauthorizedException('Invalid Token!');
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
