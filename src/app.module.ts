import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ImportsMain } from './imports';
import { AuthMiddleware } from './middleware/auth/auth.middleware';

@Module(ImportsMain)
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes('');
  // } //Not for swagger
}
