import { PartialType } from '@nestjs/swagger';
import { CreateCatastroRecordDto } from './create-catastro-record.dto';

export class UpdateCatastroRecordDto extends PartialType(
  CreateCatastroRecordDto,
) {}
