import { Delete, Get, Inject, Post, Put, Param, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankCreateDto } from './dto/bank.create.dto';

@Controller()
export class BankController {
  constructor(@Inject(BankService) private bankService: BankService) {}

  @Get('/bank')
  public async getBank(id: number): Promise<any> {
    return this.bankService.getBank(id);
  }

  @Get('/banks')
  public async getBanks(): Promise<any> {
    return this.bankService.getBanks();
  }

  @Post('/bank')
  public async createBank(@Body() createDto: BankCreateDto): Promise<any> {
    return this.bankService.createBank(createDto);
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
