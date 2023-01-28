import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from './dto/category.create.dto';
import { ResultObject } from '../common/result.object';
import { isObjectEmpty } from '../common/empty.check';
import { CategoryStatisticDto } from './dto/category.statistic.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(CategoryEntity) private categoryRepo: Repository<CategoryEntity>) {}

  async getCategory(id: number): Promise<ResultObject> {
    const category = await this.categoryRepo.findOne({
      where: {
        id: id,
      },
    });
    if (category) {
      return {
        status: 200,
        success: true,
        result: category,
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
    const category = await this.categoryRepo.find();
    console.log(category);
    if (isObjectEmpty(category)) {
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

  async getStatistic(input: CategoryStatisticDto): Promise<any> {
    return null;
  }

  async createCategory(createDto: CategoryCreateDto): Promise<ResultObject> {
    if (await this.categoryRepo.findOne({ where: { name: createDto.name } })) {
      return {
        status: 400,
        success: false,
        message: 'This category already exist',
        result: null,
      };
    }
    const newCategory: CategoryEntity = await this.categoryRepo.create(createDto);
    return {
      status: 200,
      success: true,
      message: 'success',
      result: await this.categoryRepo.save(newCategory),
    };
  }

  async deleteCategory(id: number): Promise<ResultObject> {
    const category: CategoryEntity = await this.categoryRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!category) {
      return {
        status: 400,
        success: false,
        message: 'This category not exist',
        result: null,
      };
    } else {
      await this.categoryRepo.delete({
        id,
      });
      return {
        status: 200,
        success: true,
        message: `Category was deleted `,
        result: category,
      } as ResultObject;
    }
  }

  async updateCategory(id: number, categoryDto: CategoryCreateDto): Promise<ResultObject> {
    if (!categoryDto.name || categoryDto === null) {
      return {
        status: 400,
        success: false,
        message: 'There are no inputed object',
        result: null,
      };
    }

    if (
      !(await this.categoryRepo.findOne({
        where: {
          id: id,
        },
      }))
    ) {
      return {
        status: 300,
        success: false,
        message: 'Cannot update not existing object',
        result: null,
      };
    }

    if (await this.categoryRepo.update(id, categoryDto)) {
      return {
        status: 200,
        success: true,
        result: await this.categoryRepo.findOne({
          where: {
            id: id,
          },
        }),
      } as ResultObject;
    } else {
      return {
        status: 400,
        success: false,
        message: `Cannot update category by id: ${id}`,
        result: null,
      } as ResultObject;
    }
  }
}
