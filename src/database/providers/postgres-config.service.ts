import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from '@modules/users/entities/user.entity';
import { DocumentType } from '@modules/document-types/entities/document-type.entity';
import { Customer } from '@modules/customers/entities/customer.entity';
import { Rol } from '@modules/rols/entities/rol.entity';
@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('POSTGRES_HOST'),
      port: this.configService.get<number>('POSTGRES_PORT'),
      username: this.configService.get<string>('POSTGRES_USER'),
      password: this.configService.get<string>('POSTGRES_PASSWORD'),
      database: this.configService.get<string>('POSTGRES_DATABASE'),
      entities: [User, DocumentType, Customer, Rol],
      synchronize: true, //False for production and database first approach
    };
  }
}
