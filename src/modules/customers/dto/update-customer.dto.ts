import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  documentType: number;

  @ApiProperty()
  document: string;

  @ApiProperty()
  maritalStatus: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;
}
