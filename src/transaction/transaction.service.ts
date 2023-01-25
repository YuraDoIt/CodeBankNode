import { Entity, Repository } from 'typeorm';
import { TransactionEntity } from './entity/transaction.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity) private bankRepo: Repository<TransactionEntity>
  ) {}
}
