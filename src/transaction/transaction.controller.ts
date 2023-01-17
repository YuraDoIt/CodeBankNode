import { Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';

@Controller()
export class TransactionController {
  // constructor(@Inject(CategoryService) private categoryService: CategoryService) {}
  // @Get('/bank')
  // public async getCategory(): Promise<any> {
  //   return this.categoryService.getCategory();
  // }
  // @Get('/banks')
  // public async getCategoryes(): Promise<any> {
  //   return this.categoryService.getCategoryes();
  // }
  // @Post('/bank')
  // public async createCategory(): Promise<any> {
  //   return this.categoryService.createCategory();
  // }
  // @Put('/bank')
  // public async updateCategory(): Promise<any> {
  //   return this.categoryService.updateCategory();
  // }
  // @Delete('bank')
  // public async deleteCategory(@Param() id: number): Promise<any> {
  //   console.log(id);
  //   return this.categoryService.deleteCategory();
  // }
}
