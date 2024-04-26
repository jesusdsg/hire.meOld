import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  getPredialPropertiesByAddress(address: string) {
    console.log('Manda dirección ', address);
    const result = this.propertyRepository.find({
      where: {
        direccion_predio: Like(`%${address}%`),
      },
    });
    /*
    const result = this.propertyRepository.find({
      where: {
        direccion_predio: address,
      },
    });*/
    return result;
  }

  getRegCatastroByAddress(address: string) {
    console.log('Manda dirección ', address);
    const result = this.propertyRepository
      .createQueryBuilder('u')
      .select(['u.firstName', 'u.lastName'])
      .innerJoin('m.companyRelations', 'cr')
      .getOne();
  }

  findAll() {
    return `This action returns all properties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
