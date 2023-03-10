import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from '../bank/entity/bank.entity';
import { TransactionEntity } from './entity/transaction.entity';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { CategoryEntity } from '../category/entity/category.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([TransactionEntity, BankEntity, CategoryEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [],
})
export class TransactionModule {}
