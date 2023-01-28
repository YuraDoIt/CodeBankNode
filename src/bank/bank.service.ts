import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResultObject } from './../common/result.object';
import { BankCreateDto } from './dto/bank.create.dto';
import { BankUpdateDto } from './dto/bank.update.dto';
import { BankEntity } from './entity/bank.entity';
import { isObjectEmpty } from '../common/method/empty.check';
import { ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('apiKey', ['apiKey'])
@Injectable()
export class BankService {
  constructor(@InjectRepository(BankEntity) private bankRepo: Repository<BankEntity>) {}

  public async getBank(id: number): Promise<ResultObject> {
    const bank = await this.bankRepo.findOne({
      where: {
        id: id,
      },
    });
    if (bank) {
      return {
        status: 200,
        success: true,
        result: bank,
      } as ResultObject;
    } else {
      return {
        status: 401,
        success: false,
        message: 'Bank not found',
        result: null,
      } as ResultObject;
    }
  }

  public async getBanks(): Promise<ResultObject> {
    const bank = await this.bankRepo.find();
    if (isObjectEmpty(bank)) {
      return {
        status: 200,
        success: true,
        message: 'There are no existing bank',
        result: [],
      };
    }
    return {
      status: 200,
      success: true,
      result: await this.bankRepo.find(),
    };
  }

  public async createBank(bankCreate: BankCreateDto): Promise<ResultObject> {
    if (!bankCreate.name || bankCreate.name === null || bankCreate.name === undefined) {
      return {
        status: 400,
        success: false,
        message: 'Name is empty',
        result: null,
      } as ResultObject;
    }

    if (await this.bankRepo.findOneBy({ name: bankCreate.name })) {
      return {
        status: 400,
        success: false,
        message: 'This bank already exist',
        result: null,
      } as ResultObject;
    } else
      return {
        status: 200,
        success: true,
        result: await this.bankRepo.save(bankCreate),
      };
  }

  public async updateBank(updateDto: BankUpdateDto): Promise<ResultObject> {
    if (!updateDto.name || updateDto === null) {
      return {
        status: 400,
        success: false,
        message: 'There are no inputed object',
        result: null,
      };
    }
    if (
      !(await this.bankRepo.findOne({
        where: {
          id: updateDto.id,
        },
      }))
    ) {
      return {
        status: 300,
        success: false,
        message: 'Cannot update not existing object',
        result: null,
      };
    }

    if (await this.bankRepo.update(updateDto.id, updateDto)) {
      return {
        status: 200,
        success: true,
        result: await this.bankRepo.findOne({
          where: {
            id: updateDto.id,
          },
        }),
      } as ResultObject;
    } else {
      return {
        status: 400,
        success: false,
        message: `Cannot update bank by id: ${updateDto.id}`,
        result: null,
      } as ResultObject;
    }
  }

  public async deleteBank(id: number): Promise<ResultObject> {
    const bank: BankEntity = await this.bankRepo.findOne({
      where: {
        id: id,
      },
      relations: ['transactions'],
    });

    if (bank.transactions.length != 0) {
      return {
        status: 404,
        success: false,
        message: 'You cannot delete bank if it has transaction',
        result: null,
      };
    }

    if (!bank) {
      return {
        status: 400,
        success: false,
        message: 'This bank not exist',
        result: null,
      };
    } else {
      await this.bankRepo.delete({
        id,
      });
      return {
        status: 200,
        success: true,
        message: `Bank was deleted `,
        result: bank,
      } as ResultObject;
    }
  }
}
