import {
  Controller,
  Body,
  Post,
  Request,
  UseGuards,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from '@auth/guards/authenticated.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local.auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from 'src/common/filters/HttpException.filter';
import { ExistingUserException } from './exceptions/ExistingUser.exception';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Using decorator with the route name
   * add user in database Method
   */
  @UseFilters(HttpExceptionFilter)
  @Post('/register')
  async createUser(@Body() newUser: CreateUserDto) {
    const saltOrRounds = 10;
    const userPassword = newUser.password;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    newUser.password = hashedPassword;
    const existingUser = await this.usersService.getUserByEmail(newUser.email);
    if (!existingUser) {
      const user = await this.usersService.createUser(newUser);
      return {
        message: 'Usuario registrado exitosamente',
        userId: user.id,
        userName: user.username,
        userEmail: user.email,
      };
    } else {
      throw new ExistingUserException();
    }
  }

  /**
   * Login method with the auth guard to achieve the user validations
   * @param req
   * @returns
   */

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any): Promise<any> {
    return {
      user: req.user,
      message: 'Inicio de sesión exitoso',
    };
  }

  /**
   * Protected routes
   */

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<Promise<User> | any> {
    try {
      return await this.usersService.getUserById(id);
    } catch (error) {
      throw new HttpException({ error: error }, HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    try {
      return await this.usersService.updateUser(id, user);
    } catch (error) {
      throw new HttpException({ error: error }, HttpStatus.FORBIDDEN);
    }
  }

  /**
   * Logout to end and destroy the session
   * @param req
   * @returns
   */
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return {
      message: 'The session has ended',
    };
  }
}
