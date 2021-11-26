import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const config = app.get(ConfigService),
        PORT = config.get('port')

  app.enableCors()
  app.setGlobalPrefix('api')

  await app.listen(
    PORT,
    () => Logger.log(`Server running on port ${PORT}. Process ID: ${process.pid}`, 'NetwrixApp')
  )
}
bootstrap()
