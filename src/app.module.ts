import { Module } from '@nestjs/common';
import { BankModule } from './bank/bank.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from './bank/entity/bank.entity';
import { CategoryEntity } from './category/entity/category.entity';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    BankModule,
    CategoryModule,
    TransactionModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgresbank',
      entities: [BankEntity, CategoryEntity],
      synchronize: true,
      migrationsRun: true,
      logging: true,
    }),

    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
