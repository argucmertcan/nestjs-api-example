import * as mongoose from 'mongoose'

export class CategoryModel {
  id:string;
  title:string;
}

export const CategorySchema = new mongoose.Schema({
  id:String,
  title:String
})