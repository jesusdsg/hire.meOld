import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@database/database/database.module';
import { DocumentTypesModule } from '@modules/document-types/document-types.module';
import { CustomersModule } from '@modules/customers/customers.module';
import { RolsModule } from '@modules/rols/rols.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    DocumentTypesModule,
    CustomersModule,
    RolsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
