import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankModule } from './bank/bank.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from './bank/entity/bank.entity';

@Module({
  imports: [
    BankModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgresbank',
      entities: [BankEntity],
      synchronize: true,
      migrationsRun: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
