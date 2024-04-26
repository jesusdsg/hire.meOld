import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    /**
     * Main model to handle database users
     */
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * Main functions to get and set Users in database
   * @param userName
   * @param password
   * @returns
   */
  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getUserById(id: number) {
    const user = this.userRepository.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  async getUserByUsername(username: string) {
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async getUsers() {
    return this.userRepository.find();
  }

  async deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  async updateUser(id: number, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user);
  }
}
