import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';

export class BankCreateDto {
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
  @Min(0)
  public balance: number;
}
