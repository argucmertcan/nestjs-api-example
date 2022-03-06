import * as mongoose from 'mongoose'

export class CategoryModel {
  id: string;
  title: string;
  parent: string;
}

export const CategorySchema = new mongoose.Schema({
  id: String,
  title: String,
  parent: { type: String, default: "*" },
  createdAt: {
    type: Date, default: Date.now
  }
})