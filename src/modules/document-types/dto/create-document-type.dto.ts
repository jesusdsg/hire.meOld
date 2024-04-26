import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentTypeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
