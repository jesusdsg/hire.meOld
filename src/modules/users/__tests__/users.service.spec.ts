import { TestingModule, Test } from '@nestjs/testing';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcryptUtils from 'bcrypt';

describe('Users Service', () => {
  let service: UsersService;
  let repository: Repository<User>;
  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);
  const sampleUser = {
    username: 'test',
    email: 'test@mail.com',
    name: 'Test User',
    password: 'test123',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Repository be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('createUser', () => {
    it('Should create an User with encoded password', async () => {
      const spyHash = jest.spyOn(bcryptUtils, 'hash');
      const newUser = await service.createUser(sampleUser);
      expect(newUser);
    });

    it('Should create call repository with correct params', async () => {
      await service.createUser(sampleUser);
      expect(repository.create).toHaveBeenCalledWith(sampleUser);
    });
  });
});
