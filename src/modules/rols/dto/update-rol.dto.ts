import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from './create-rol.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRolDto extends PartialType(CreateRolDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
