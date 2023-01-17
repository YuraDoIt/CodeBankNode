import { HttpStatus, Injectable } from '@nestjs/common';
import { BankEntity } from './entity/bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankCreateDto } from './dto/bank.create.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { ExeptionHandle } from '../exeptions/exeption.handle';

@Injectable()
export class BankService {
  constructor(@InjectRepository(BankEntity) private bankRepo: Repository<BankEntity>) {}

  public async getBank(id: number): Promise<BankEntity> {
    return await this.bankRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  public async getBanks(): Promise<any> {
    return await this.bankRepo.find();
  }

  public async createBank(bankCreate: BankCreateDto): Promise<any> {
    if (await this.bankRepo.findOneBy({ name: bankCreate.name })) {
      throw new HttpException(
        {
          success: false,
          message: 'User with this phone or email already exist',
        },
        HttpStatus.CONFLICT
      );
    } else return await this.bankRepo.save(bankCreate);
  }

  public async updateBank(): Promise<any> {
    return 'Bank updated';
  }

  public deleteBank(): any {
    throw new Error('Method not implemented.');
  }
}
