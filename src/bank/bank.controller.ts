import { Body, Controller, Delete, Get, Inject, Post, Put } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankCreateDto } from './dto/bank.create.dto';
import { BankUpdateDto } from './dto/bank.update.dto';
import { ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller()
export class BankController {
  constructor(@Inject(BankService) private bankService: BankService) {}

  @Get('/bank')
  @ApiResponse({
    description: 'get bank by id',
  })
  @ApiBadRequestResponse({ description: 'Bank not found' })
  public async getBank(id: number): Promise<any> {
    return this.bankService.getBank(id);
  }

  @Get('/banks')
  @ApiResponse({
    description: 'get all banks',
  })
  public async getBanks(): Promise<any> {
    return this.bankService.getBanks();
  }

  @Post('/bank')
  @ApiResponse({
    description: 'create bank',
  })
  public async createBank(@Body() createDto: BankCreateDto): Promise<any> {
    return this.bankService.createBank(createDto);
  }

  @Put('/bank')
  @ApiResponse({
    description: 'update bank by id',
  })
  public async updateBank(@Body() updateDto: BankUpdateDto): Promise<any> {
    return this.bankService.updateBank(updateDto);
  }

  @Delete('/bank')
  @ApiResponse({
    description: 'delete bank by id',
  })
  public async deleteDank(@Body() id: number): Promise<any> {
    return this.bankService.deleteBank(id);
  }
}
