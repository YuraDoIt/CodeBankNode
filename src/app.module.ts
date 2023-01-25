import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './bank/bank.module';
import { BankEntity } from './bank/entity/bank.entity';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/entity/category.entity';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionEntity } from './transaction/entity/transaction.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    BankModule,
    CategoryModule,
    TransactionModule,
    HttpModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgresbank',
      entities: [TransactionEntity, BankEntity, CategoryEntity],
      synchronize: true,
      migrationsRun: true,
      logging: true,
      dropSchema: true,
    }),

    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
