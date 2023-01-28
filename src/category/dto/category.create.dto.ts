import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CategoryCreateDto {
  @ApiProperty({
    description: 'category',
    type: 'string',
    example: 'Fishing',
  })
  @IsString()
  name: string;
}
