import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from './dto/category.create.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(CategoryEntity) private categoryRepo: Repository<CategoryEntity>) {}

  async getCategory(id: number): Promise<any> {
    return await this.categoryRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async getCategoryes(): Promise<CategoryEntity[]> {
    return this.categoryRepo.find();
  }

  async createCategory(createDto: CategoryCreateDto): Promise<any> {
    return this.categoryRepo.create(createDto);
  }

  async deleteCategory(): Promise<any> {
    return 'deleted';
  }

  async updateCategory(id: number, categoryDto: any): Promise<any> {
    return 'updated';
  }
}
