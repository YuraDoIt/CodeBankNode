import { Controller, Delete, Get, Inject, Param, Post, Put, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category.create.dto';
import { ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { CategoryStatisticDto } from './dto/category.statistic.dto';
import { ResultObject } from '../common/result.object';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(@Inject(CategoryService) private categoryService: CategoryService) {}

  @Get('/:id')
  @ApiResponse({
    description: 'get category by id',
    status: 200,
  })
  @ApiParam({ name: 'id', required: true, description: 'Category identifier' })
  public async getCategory(@Param('id') id: number): Promise<ResultObject> {
    return await this.categoryService.getCategory(id);
  }

  @Get('')
  @ApiResponse({
    description: 'get all categoryes',
    status: 200,
  })
  public async getCategoryes(): Promise<ResultObject> {
    return await this.categoryService.getCategoryes();
  }

  @Post('statistic')
  @ApiResponse({
    description: 'get category statistics',
    status: 200,
  })
  public async getCategoryStatistic(@Body() input: CategoryStatisticDto): Promise<any> {
    return await this.categoryService.getStatistic(input);
  }

  @Post('')
  @ApiResponse({
    description: 'method for category creation',
    status: 200,
  })
  public async createCategory(@Body() createDto: CategoryCreateDto): Promise<ResultObject> {
    return await this.categoryService.createCategory(createDto);
  }

  @Put(':id')
  public async updateCategory(@Param('id') id: number, @Body() categoryDto): Promise<ResultObject> {
    return await this.categoryService.updateCategory(id, categoryDto);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'Method for delet category by id',
    status: 200,
  })
  public async deleteCategory(@Param('id') id: number): Promise<ResultObject> {
    return await this.categoryService.deleteCategory(id);
  }
}
