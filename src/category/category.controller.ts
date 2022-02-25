import { Body, Controller,Param, Get, Post, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto, CategoryUpdateDto } from 'tools/dtos/Category.dto';
import { CategoryModel } from 'tools/models/category.model';

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
