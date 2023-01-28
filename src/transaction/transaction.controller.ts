import { Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { Body } from '@nestjs/common/decorators';
import { TransactionCreateDto } from './dto/transaction.create.dto';
import { PaginationType } from '../common/paginate';
import { HttpService } from '@nestjs/axios';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(
    @Inject(TransactionService) private transactionService: TransactionService,
    private readonly httpService: HttpService
  ) {}

  @Get('')
  @ApiResponse({
    description: 'get all transaction',
    status: 200,
  })
  public async getTransaction(@Body() paginate: PaginationType): Promise<any> {
    return this.transactionService.getTransaction(paginate);
  }

  @Post('')
  @ApiResponse({
    description: 'create transaction',
    status: 200,
  })
  public async createTransaction(@Body() createDto: TransactionCreateDto): Promise<any> {
    return this.transactionService.createTransaction(createDto);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'delete transaction by id',
    status: 200,
  })
  public async delteTransact(@Param() id: number): Promise<any> {
    return this.transactionService.delteTransact(id);
  }

  @Post('/webhook')
  public async makeWebhook(@Body() data: any): Promise<any> {
    // const makeHook = await this.transactionService.makeHook(data);
    this.httpService.post('localhost:3000/transaction', data).subscribe({
      complete: () => {
        console.log('completed');
      },
      error: err => {},
    });
    return;
  }
}
