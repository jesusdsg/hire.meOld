import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('document-types')
@Controller('document-types')
export class DocumentTypesController {
  constructor(private readonly documentTypesService: DocumentTypesService) {}

  @Post()
  create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    return this.documentTypesService.create(createDocumentTypeDto);
  }

  @Get()
  findAll() {
    return this.documentTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentTypeDto: UpdateDocumentTypeDto,
  ) {
    return this.documentTypesService.update(+id, updateDocumentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentTypesService.remove(+id);
  }
}
