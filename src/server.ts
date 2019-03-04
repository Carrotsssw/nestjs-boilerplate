import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './main.module/main.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.HTTP_PORT || 5555);
  Logger.log(`Server running on http://localhost:${process.env.HTTP_PORT}`, 'Bootstrap');
}
bootstrap();
