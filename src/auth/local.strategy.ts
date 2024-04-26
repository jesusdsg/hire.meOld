import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  /**
   * Validate the user and password
   * @param username
   * @param password
   * @returns
   */

  async validate(username: string, password: string): Promise<any> {
    const userName = username.toLocaleLowerCase();
    const user = await this.authService.validateUser(userName, password);
    if (!user) {
      //throw new UnauthorizedException();
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Credenciales inválidas',
        },
        HttpStatus.CONFLICT,
        {
          cause: {
            message: 'Usuario o contraseña no existen',
            name: 'Invalid credentials',
          },
        },
      );
    }
    return user;
  }
}
