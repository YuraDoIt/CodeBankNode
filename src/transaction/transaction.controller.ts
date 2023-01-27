import { Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { Body } from '@nestjs/common/decorators';
import { TransactionCreateDto } from './dto/transaction.create.dto';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(@Inject(TransactionService) private transactionService: TransactionService) {}
  // @Get('/bank')
  // public async getTransaction(): Promise<any> {
  //   return this.transactionService.getTransaction();
  // }
  // @Get('/banks')
  // public async getTransaction(): Promise<any> {
  //   return this.transactionService.getTransaction();
  // }
  @Post('')
  public async createTransaction(@Body() createDto: TransactionCreateDto): Promise<any> {
    return this.transactionService.createTransaction(createDto);
  }

  // @Put('/bank')
  // public async updateTransaction(): Promise<any> {
  //   return this.transactionService.updateTransaction();
  // }

  @Delete(':id')
  public async delteTransact(@Param() id: number): Promise<any> {
    return this.transactionService.delteTransact(id);
  }
}
