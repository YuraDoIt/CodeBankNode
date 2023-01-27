import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from './dto/category.create.dto';
import { ResultObject } from '../common/result.object';
import { isObjectEmpty } from '../common/empty.check';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(CategoryEntity) private categoryRepo: Repository<CategoryEntity>) {}

  async getCategory(id: number): Promise<any> {
    const bank = await this.categoryRepo.findOne({
      where: {
        id: id,
      },
    });
    if (bank) {
      return {
        status: 200,
        success: true,
        result: bank,
      } as ResultObject;
    } else {
      return {
        status: 401,
        success: false,
        message: 'Category not found',
        result: null,
      } as ResultObject;
    }
  }

  async getCategoryes(): Promise<ResultObject> {
    const bank = await this.categoryRepo.find();
    console.log(bank);
    if (isObjectEmpty(bank)) {
      return {
        status: 200,
        success: true,
        message: 'There are no existing category',
        result: [],
      } as ResultObject;
    }
    return {
      status: 200,
      success: true,
      result: await this.categoryRepo.find(),
    } as ResultObject;
  }

  async createCategory(createDto: CategoryCreateDto): Promise<any> {
    return this.categoryRepo.create(createDto);
  }

  async deleteCategory(id: number): Promise<any> {
    const category = await this.categoryRepo.findOne({
      where: {
        id: id,
      },
    });

    // if (category.transaction.length === 0) {
    // }
  }

  async updateCategory(id: number, categoryDto: any): Promise<any> {
    return 'updated';
  }
}
