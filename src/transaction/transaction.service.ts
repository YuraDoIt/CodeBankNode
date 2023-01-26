import { Entity, Repository } from 'typeorm';
import { TransactionEntity } from './entity/transaction.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionCreateDto } from './dto/transaction.create.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity) private transactionRepo: Repository<TransactionEntity>
  ) {}

  async createTransaction(createDto: TransactionCreateDto): Promise<any> {
    return await this.transactionRepo.save(createDto);
  }

  async deleteTransaction(): Promise<any> {
    return this.transactionRepo.clear();
  }
}
