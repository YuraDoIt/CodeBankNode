import { Entity, Repository } from 'typeorm';
import { TransactionEntity } from './entity/transaction.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionCreateDto } from './dto/transaction.create.dto';
import { BankEntity } from '../bank/entity/bank.entity';
import { ResultObject } from '../common/result.object';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity) private transactionRepo: Repository<TransactionEntity>,
    @InjectRepository(BankEntity) private bankRepo: Repository<BankEntity>
  ) {}

  async createTransaction(createDto: TransactionCreateDto): Promise<any> {
    const bank = await this.bankRepo.findOneBy({
      id: createDto.bankid,
    });
    if (!bank) {
      return {
        status: 400,
        success: false,
        message: `Bank not exist `,
        result: bank,
      } as ResultObject;
    }
    const newTransaction = new TransactionEntity();
    newTransaction.bank = bank;
    newTransaction.amount = createDto.amount;
    newTransaction.type = createDto.type;

    return {
      status: 200,
      success: true,
      message: `Successfuly added`,
      result: await this.transactionRepo.save(newTransaction),
    } as ResultObject;
  }

  async delteTransact(id: number): Promise<any> {
    const transaction = await this.transactionRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!transaction) {
      return {
        status: 400,
        success: false,
        message: 'This transaction not exist',
        result: null,
      };
    } else {
      await this.bankRepo.delete({
        id,
      });
      return {
        status: 200,
        success: true,
        message: `Transaction was deleted `,
        result: transaction,
      } as ResultObject;
    }
  }

  async clearTransactions(): Promise<any> {
    return this.transactionRepo.clear();
  }
}
