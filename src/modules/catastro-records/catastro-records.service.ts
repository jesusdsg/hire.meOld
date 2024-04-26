import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/modules/properties/entities/property.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCatastroRecordDto } from './dto/create-catastro-record.dto';
import { UpdateCatastroRecordDto } from './dto/update-catastro-record.dto';
import { CatastroRecord } from './entities/catastro-record.entity';

@Injectable()
export class CatastroRecordsService {
  constructor(
    @InjectRepository(CatastroRecord)
    private catastroRecordRepository: Repository<CatastroRecord>,
  ) {}

  async getRecordsByPredialAddress(address: string) {
    const records = await this.catastroRecordRepository.manager
      .createQueryBuilder(CatastroRecord, 'rc')
      .select('rc', 'registro')
      .addSelect('p.numero_predio', 'numero_predio')
      .addSelect('u.correo', 'correo')
      .addSelect('p.direccion_predio', 'direccion_predio')
      .addSelect('p.matricula_inmobiliaria', 'matricula_inmobiliaria')
      .addSelect('pp.nombre_completo', 'nombre_completo')
      .innerJoin(Property, 'p', 'rc.id_predio = p.id')
      .innerJoin(User, 'u', 'rc.id_usuario = u.id')
      .where('p.direccion_predio like :value', { value: `%${address}%` })
      .limit(100)
      .getRawMany(); // depend on what you need really
    return records;
  }

  async getRecordsByCatastralReference(reference: number) {
    const records = await this.catastroRecordRepository.manager
      .createQueryBuilder(CatastroRecord, 'rc')
      .select('rc', 'registro')
      .addSelect('p.numero_predio', 'numero_predio')
      .addSelect('u.correo', 'correo')
      .addSelect('p.direccion_predio', 'direccion_predio')
      .addSelect('p.matricula_inmobiliaria', 'matricula_inmobiliaria')
      .addSelect('pp.nombre_completo', 'nombre_completo')
      .innerJoin(Property, 'p', 'rc.id_predio = p.id')
      .innerJoin(User, 'u', 'rc.id_usuario = u.id')
      .where('rc.numero_predial_anterior like :value', {
        value: `${reference}%`,
      })
      .limit(100)
      .getRawMany(); // depend on what you need really
    return records;
  }

  async getRecordsByPredialRegistration(registration: string) {
    const records = await this.catastroRecordRepository.manager
      .createQueryBuilder(CatastroRecord, 'rc')
      .select('rc', 'registro')
      .addSelect('p.numero_predio', 'numero_predio')
      .addSelect('u.correo', 'correo')
      .addSelect('p.direccion_predio', 'direccion_predio')
      .addSelect('p.matricula_inmobiliaria', 'matricula_inmobiliaria')
      .addSelect('pp.nombre_completo', 'nombre_completo')
      .innerJoin(Property, 'p', 'rc.id_predio = p.id')
      .innerJoin(User, 'u', 'rc.id_usuario = u.id')
      .where('p.matricula_inmobiliaria like :value', {
        value: `%${registration}%`,
      })
      .limit(100)
      .getRawMany(); // depend on what you need really
    return records;
  }

  getRecords() {
    return this.catastroRecordRepository.find();
  }

  create(createCatastroRecordDto: CreateCatastroRecordDto) {
    return 'This action adds a new catastroRecord';
  }

  findAll() {
    return `This action returns all catastroRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catastroRecord`;
  }

  update(id: number, updateCatastroRecordDto: UpdateCatastroRecordDto) {
    return `This action updates a #${id} catastroRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} catastroRecord`;
  }
}
