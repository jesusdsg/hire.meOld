import { HttpException, HttpStatus } from '@nestjs/common';

export class ExistingUserException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    super(
      message || 'El email ya se encuentra registrado',
      status || HttpStatus.BAD_REQUEST,
    );
  }
}
