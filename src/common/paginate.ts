import { ApiProperty } from '@nestjs/swagger';

export class PaginationType {
  @ApiProperty({
    description: 'page paginate',
    type: 'number',
    example: 5,
  })
  skip: number;

  @ApiProperty({
    description: 'item per page paginate',
    type: 'number',
    example: 5,
  })
  take: number;
}
