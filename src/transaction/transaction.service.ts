import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankEntity } from '../bank/entity/bank.entity';
import { ResultObject } from '../common/result.object';
import { TransactionCreateDto } from './dto/transaction.create.dto';
import { TransactionEntity } from './entity/transaction.entity';
import { isObjectEmpty } from '../common/empty.check';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity) private transactionRepo: Repository<TransactionEntity>,
    @InjectRepository(BankEntity) private bankRepo: Repository<BankEntity>
  ) {}

  async getTransaction(): Promise<any> {
    const transaction = await this.transactionRepo.find();
    if (isObjectEmpty(transaction)) {
      return {
        status: 200,
        success: true,
        message: 'There are no existing transaction',
        result: [],
      };
    }
    return {
      status: 200,
      success: true,
      message: 'Successfuly find',
      result: await this.bankRepo.find(),
    };
  }

  async createTransaction(createDto: TransactionCreateDto): Promise<any> {
    if (!createDto || !createDto.type || !createDto.amount || !createDto.bankid) {
      return {
        status: 400,
        success: false,
        message: `Field shoud be fill`,
        result: null,
      } as ResultObject;
    }

    if (createDto.type != 'consumable' && createDto.type != 'profitable') {
      return {
        status: 400,
        success: false,
        message: `Field type of transaction should be consumable/profitable`,
        result: null,
      } as ResultObject;
    }

    const bank = await this.bankRepo.findOneBy({
      id: createDto.bankid,
    });

    if (!bank) {
      return {
        status: 400,
        success: false,
        message: `Transaction not exist`,
        result: bank,
      } as ResultObject;
    }

    const newTransaction = new TransactionEntity();
    newTransaction.bank = bank;
    newTransaction.amount = createDto.amount;
    newTransaction.type = createDto.type;

    await this.makeHook(newTransaction, bank);

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

  async makeHook(newTransaction: TransactionEntity, bank: BankEntity): Promise<any> {
    if (newTransaction.type === 'profitable') {
      bank.balance += newTransaction.amount;
    }
    if (newTransaction.type === 'consumable') {
      if (bank.balance < newTransaction.amount) {
        return {
          status: 400,
          success: false,
          message: `Amount of money not enought`,
          result: null,
        } as ResultObject;
      }
      bank.balance -= newTransaction.amount;
    }
    await this.bankRepo.save(bank);
  }

  async clearTransactions(): Promise<any> {
    return this.transactionRepo.clear();
  }
}
