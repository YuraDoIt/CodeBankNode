import { Delete, Get, Inject, Post, Put, Param, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankCreateDto } from './dto/bank.create.dto';
import { BankUpdateDto } from './dto/bank.update.dto';

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
  public async updateBank(@Body() updateDto: BankUpdateDto): Promise<any> {
    return this.bankService.updateBank(updateDto);
  }

  @Delete('/bank')
  public async deleteDank(@Body() id: number): Promise<any> {
    return this.bankService.deleteBank(id);
  }
}
