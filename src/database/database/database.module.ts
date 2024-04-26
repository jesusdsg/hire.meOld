import { PostgresConfigService } from '@database/providers/postgres-config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PostgresConfigService],
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [PostgresConfigService],
      useClass: PostgresConfigService,
    }),
  ],
  exports: [PostgresConfigService],
})
export class DatabaseModule {}
