import { Controller, Delete, Get, Inject, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller()
export class CategoryController {
  constructor(@Inject(CategoryService) private categoryService: CategoryService) {}

  @Get('/bank')
  public async getCategory(): Promise<any> {
    return this.categoryService.getCategory();
  }

  @Get('/banks')
  public async getCategoryes(): Promise<any> {
    return this.categoryService.getCategoryes();
  }

  @Post('/bank')
  public async createCategory(): Promise<any> {
    return this.categoryService.createCategory();
  }

  @Put('/bank')
  public async updateCategory(): Promise<any> {
    return this.categoryService.updateCategory();
  }

  @Delete()
  public async deleteCategory(): Promise<any> {
    return this.categoryService.deleteCategory();
  }
}
