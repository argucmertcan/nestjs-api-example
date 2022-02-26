import { AuditModel } from "./audit.model";
import * as mongoose from 'mongoose'

export class UserModel {
  id:string;
  name:string;
  surname:string;
  image:string;
  email:string;
  password:string;
  birthDay:Date;
  audit:AuditModel;
}

export const UserSchema = new mongoose.Schema({
  name:String,
  surname:String,
  image:String,
  email:String,
  password:String,
  birthDay:Date,
  audit:Object
})