import { Body, Controller,Param, Get, Post, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto, CategoryUpdateDto } from 'src/category/category.interface';
import { CategoryModel } from 'src/category/models/category.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Category Actions')
@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {
  }

  @Post()
  async createCategory(@Body() body: CategoryCreateDto): Promise<CategoryModel> {
    return await this.CategoryService.create(body)
  }

  @Get()
  async getAllCategorys(): Promise<CategoryModel[]> {
    return await this.CategoryService.findAll();
  }

  @Get(':id')
  async getCategory(@Param() params): Promise<CategoryModel> {
    return await this.CategoryService.findOne(params.id)
  }

  @Put(':id')
  async updateCategory(@Param('id') id: string, @Body() CategoryUpdateDto: CategoryUpdateDto): Promise<CategoryModel> {
    return await this.CategoryService.update(id, CategoryUpdateDto);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<CategoryModel> {
    return await this.CategoryService.delete(id);
  }
}
