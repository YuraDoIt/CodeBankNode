import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  async getCategory(): Promise<any> {
    return 'get Category';
  }

  async getCategoryes(): Promise<any> {
    return 'get Category';
  }

  async deleteCategory(): Promise<any> {
    return 'deleted';
  }

  async updateCategory(): Promise<any> {
    return 'updated';
  }
}