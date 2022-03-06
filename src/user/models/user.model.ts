import * as mongoose from 'mongoose'

export class UserModel {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  createdAt: Date;
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'user name is required'] },
  surname: String,
  image: String,
  email: { type: String, unique: true },
  password: String,
  createdAt: Date,
  audit: Object
})