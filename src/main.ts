import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from '@common/filters/HttpException.filter';
declare const module: any;

async function bootstrap() {
  const secretKey = process.env.SECRET_KEY || 's3cr3t';
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.enableCors();
  app.use(
    session({
      secret: secretKey,
      resave: false,
      saveUninitialized: false,
    }),
  );
  // Binding filter
  app.useGlobalFilters(new HttpExceptionFilter());
  // Setting the title
  const config = new DocumentBuilder()
    .setTitle('Hire.me API')
    .setDescription('The base API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);

  // Hot reload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
