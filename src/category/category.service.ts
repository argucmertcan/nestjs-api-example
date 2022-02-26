import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryCreateDto,CategoryUpdateDto} from 'src/category/category.dto';
import { CategoryModel } from 'src/category/models/category.model';
import { Model } from 'mongoose'


@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryMongo: Model<CategoryModel>,
  ) {}

  async create(category: CategoryCreateDto): Promise<CategoryModel>{
    const createdCategory = new this.categoryMongo(category)
    return await createdCategory.save()
  }

  async findAll(): Promise<CategoryModel[]>{
    return await this.categoryMongo.find().exec()
  }

  async findOne(id:string): Promise<CategoryModel>{
    return await this.categoryMongo.findOne({_id:id}).exec()
  }

  async delete(id:string): Promise<CategoryModel>{
    return await this.categoryMongo.findByIdAndRemove({_id:id}).exec()
  }

  async update(id:string,category:CategoryUpdateDto): Promise<CategoryModel>{
    let newModel = this.categoryMongo.findOne({_id:id}).exec()
    newModel = {...newModel, ...category};

    return await this.categoryMongo.findByIdAndUpdate(id,newModel,{new:true}).exec()
  }

}