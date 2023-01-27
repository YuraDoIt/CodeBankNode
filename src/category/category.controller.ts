import { Controller, Delete, Get, Inject, Param, Post, Put, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category.create.dto';
import { ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

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
  public async getCategory(@Param('id') id: number): Promise<any> {
    return this.categoryService.getCategory(id);
  }

  @Get('')
  @ApiResponse({
    description: 'get all categoryes',
    status: 200,
  })
  public async getCategoryes(): Promise<any> {
    return this.categoryService.getCategoryes();
  }

  @Post('')
  public async createCategory(@Body() createDto: CategoryCreateDto): Promise<any> {
    return this.categoryService.createCategory(createDto);
  }

  @Put(':id')
  public async updateCategory(@Param('id') id: number, @Body() categoryDto): Promise<any> {
    return this.categoryService.updateCategory(id, categoryDto);
  }

  @Delete(':id')
  public async deleteCategory(@Param('id') id: number): Promise<any> {
    console.log(id);
    return this.categoryService.deleteCategory(id);
  }
}
