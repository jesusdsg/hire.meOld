import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentTypeDto } from './create-document-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDocumentTypeDto extends PartialType(CreateDocumentTypeDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
