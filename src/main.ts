import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common/services';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  logger.log(`server start on ${process.env.DB_HOST}`);

  app.enableCors();

  await app.listen(process.env.PORT);

  logger.log(`server start on ${process.env.PORT}`);
}
bootstrap();
