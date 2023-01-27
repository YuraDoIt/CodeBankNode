import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankCreateDto } from './dto/bank.create.dto';
import { BankUpdateDto } from './dto/bank.update.dto';
import {
  ApiResponse,
  ApiBadRequestResponse,
  ApiParam,
  ApiTags,
  ApiSecurity,
} from '@nestjs/swagger';

@ApiSecurity('apiKey', ['apiKey'])
@ApiTags('bank')
@Controller('bank')
export class BankController {
  constructor(@Inject(BankService) private bankService: BankService) {}

  @Get(':id')
  @ApiResponse({
    description: 'get bank by id',
    status: 200,
  })
  @ApiParam({ name: 'id', required: true, description: 'Bank identifier' })
  @ApiBadRequestResponse({ description: 'Bank not found' })
  public async getBank(@Param('id') id: number): Promise<any> {
    return await this.bankService.getBank(id);
  }

  @Get('')
  @ApiResponse({
    description: 'get all banks',
    status: 200,
  })
  public async getBanks(): Promise<any> {
    return await this.bankService.getBanks();
  }

  @Post('')
  @ApiResponse({
    description: 'create bank',
    status: 200,
  })
  @ApiBadRequestResponse({ description: 'Name is empty, This bank already exist' })
  public async createBank(@Body() createDto: BankCreateDto): Promise<any> {
    return await this.bankService.createBank(createDto);
  }

  @Put('')
  @ApiResponse({
    description: 'update bank by id',
    status: 200,
  })
  @ApiBadRequestResponse({ description: 'There are no inputed object' })
  public async updateBank(@Body() updateDto: BankUpdateDto): Promise<any> {
    return await this.bankService.updateBank(updateDto);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'delete bank by id',
    status: 200,
  })
  @ApiParam({ name: 'id', required: true, description: 'Bank identifier' })
  @ApiBadRequestResponse({ description: 'There are no inputed object' })
  public async deleteDank(@Param('id') id: number): Promise<any> {
    return await this.bankService.deleteBank(id);
  }
}
