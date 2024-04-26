import { Module } from '@nestjs/common';
import { CatastroRecordsService } from './catastro-records.service';
import { CatastroRecordsController } from './catastro-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatastroRecord } from './entities/catastro-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatastroRecord])],
  controllers: [CatastroRecordsController],
  providers: [CatastroRecordsService],
})
export class CatastroRecordsModule {}
