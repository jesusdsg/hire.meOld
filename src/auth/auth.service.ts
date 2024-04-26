import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByUsername(username);
    const validPassword = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('User not found');
    }
    if (user && validPassword) {
      const payload = { userId: user.id, userName: user.username };
      const token = this.jwtService.sign(payload);
      return {
        userId: user.id,
        userName: user.username,
        token: token,
      };
    }
    return null;
  }
}
