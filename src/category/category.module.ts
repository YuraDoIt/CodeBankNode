import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from '../bank/entity/bank.entity';
import { TransactionEntity } from '../transaction/entity/transaction.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, TransactionEntity, BankEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [],
})
export class CategoryModule {}
