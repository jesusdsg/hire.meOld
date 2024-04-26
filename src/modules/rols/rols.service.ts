import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolsService {
  constructor(@InjectRepository(Rol) private rolRepository: Repository<Rol>) {}

  create(rol: CreateRolDto) {
    const newRol = this.rolRepository.create(rol);
    return this.rolRepository.save(newRol);
  }

  findAll() {
    return this.rolRepository.find();
  }

  findOne(id: number) {
    return this.rolRepository.findBy({ id });
  }

  update(id: number, rol: UpdateRolDto) {
    return this.rolRepository.update({ id }, rol);
  }

  remove(id: number) {
    return this.rolRepository.delete({ id });
  }
}
