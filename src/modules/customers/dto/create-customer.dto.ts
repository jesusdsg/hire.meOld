import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
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
