import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/category/models/category.model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'Category',schema:CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
