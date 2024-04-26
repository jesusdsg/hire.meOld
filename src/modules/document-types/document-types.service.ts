import { Injectable } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentType } from './entities/document-type.entity';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private documentTypeRepository: Repository<DocumentType>,
  ) {}

  create(documentType: CreateDocumentTypeDto) {
    const newDocumentType = this.documentTypeRepository.create(documentType);
    return this.documentTypeRepository.save(newDocumentType);
  }

  findAll() {
    return this.documentTypeRepository.find();
  }

  findOne(id: number) {
    const documentType = this.documentTypeRepository.findBy({ id });
    return documentType;
  }

  update(id: number, documentType: UpdateDocumentTypeDto) {
    return this.documentTypeRepository.update({ id }, documentType);
  }

  remove(id: number) {
    return this.documentTypeRepository.delete({ id });
  }
}
