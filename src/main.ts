import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigEnv } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(AppConfigEnv.http.port);
}
bootstrap();