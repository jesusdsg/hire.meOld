import { ApiProperty } from '@nestjs/swagger/dist';

export class UpdateUserDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  password?: string;
}
