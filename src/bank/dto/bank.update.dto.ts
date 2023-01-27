import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BankUpdateDto {
  @ApiProperty({
    description: 'Bank id',
    type: 'number',
    required: true,
    example: 1,
  })
  @IsNumber()
  public id: number;

  @ApiProperty({
    description: 'Name of bank',
    type: 'string',
    example: 'Mega bank',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'Bank balance',
    type: 'number',
    example: 100,
    minimum: 0,
  })
  @IsNumber()
  public balance: number;
}
