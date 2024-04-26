import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('validateUser', () => {
    it('Should validate username and password in login', async () => {
      const result: any = null;
      const username = 'username_test';
      const password = 'password_test';
      jest
        .spyOn(authService, 'validateUser')
        .mockImplementation((username, password) => result);

      expect(await authService.validateUser(username, password)).toBe(result);
    });
  });
});
