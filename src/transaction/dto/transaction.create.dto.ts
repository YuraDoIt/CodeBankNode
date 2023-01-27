import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class TransactionCreateDto {
  @ApiProperty({
    description: 'Amount of money transact',
    type: 'number',
    example: 10,
  })
  @IsNumber()
  public amount: number;

  @ApiProperty({
    description: 'Transaction type',
    type: 'string',
    example: 'profitable',
  })
  @IsString()
  public type?: string;

  @ApiProperty({
    description: 'Bank id',
    type: 'number',
    example: 1,
  })
  @IsString()
  public bankid: number;
}
