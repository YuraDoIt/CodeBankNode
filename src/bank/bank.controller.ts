import { Delete, Get, Inject, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { BankService } from './bank.service';

@Controller()
export class BankController {
  constructor(@Inject(BankService) private bankService: BankService) {}

  @Get('/bank')
  public async getBank(): Promise<any> {
    return this.bankService.getBank();
  }

  @Get('/banks')
  public async getBanks(): Promise<any> {
    return this.bankService.getBanks();
  }

  @Post('/bank')
  public async createBank(): Promise<any> {
    return this.bankService.createBank();
  }

  @Put('/bank')
  public async updateBank(): Promise<any> {
    return this.bankService.updateBank();
  }

  @Delete()
  public async deleteDank(): Promise<any> {
    return this.bankService.deleteBank();
  }
}
