import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { CatastroRecord } from 'src/modules/catastro-records/entities/catastro-record.entity';
import { Property } from 'src/modules/properties/entities/property.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('MYSQL_HOST'),
      port: this.configService.get<number>('MYSQL_PORT'),
      username: this.configService.get<string>('MYSQL_USER'),
      password: this.configService.get<string>('MYSQL_PASSWORD'),
      database: this.configService.get<string>('MYSQL_DATABASE'),
      entities: [User, Property, CatastroRecord],
      synchronize: false, //False for production and database first approach
    };
  }
}
