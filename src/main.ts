import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common/services';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  console.log(process.env.DB_PORT);

  const config = new DocumentBuilder()
    .addApiKey({
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
      description: 'API Key For External calls',
    })
    .setTitle('Codica')
    .setDescription('Codica Bank Api description')
    .setVersion('1.0')
    .addTag('Bank')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(process.env.PORT);

  logger.log(`server start on ${process.env.PORT}`);
}
bootstrap();
