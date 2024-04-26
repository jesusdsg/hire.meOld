import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Object to use and type
 */
export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
