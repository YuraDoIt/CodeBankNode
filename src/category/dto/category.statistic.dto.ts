import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber } from 'class-validator';

export class CategoryStatisticDto {
  @ApiProperty({
    description: 'category id',
    type: 'string',
    example: 1,
  })
  @IsNumber()
  categoryId: number;

  @ApiProperty({
    description: 'category statistic',
    type: 'string',
    example: '2023-01-01',
  })
  @IsDate()
  fromPeriod: Date;

  @ApiProperty({
    description: 'category statistic',
    type: 'string',
    example: '2023-02-15',
  })
  @IsDate()
  toPeriod: Date;
}
