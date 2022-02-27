import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserLoginDto, UserUpdateDto } from 'src/user/user.dto';
import { UserModel } from 'src/user/models/user.model';
import { Model } from 'mongoose'
import env from '../../environments/env'
import * as jwt from 'jsonwebtoken'

const bcrypt = require('bcrypt')
const saltRound = 10
const hashText = env.hashText


@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,
  ) { }

  async create(user: UserCreateDto): Promise<UserModel> {
    const createdUser = new this.userMongo(user)
    return await createdUser.save()
  }

  async findAll(): Promise<UserModel[]> {
    return await this.userMongo.find().exec()
  }

  async findOne(id: string): Promise<UserModel> {
    return await this.userMongo.findOne({ _id: id }).exec()
  }

  async delete(id: string): Promise<UserModel> {
    return await this.userMongo.findByIdAndRemove({ _id: id }).exec()
  }

  async update(id: string, user: UserUpdateDto): Promise<UserModel> {
    let newModel = this.userMongo.findOne({ _id: id }).exec()
    newModel = { ...newModel, ...user };

    return await this.userMongo.findByIdAndUpdate(id, newModel, { new: true }).exec()
  }

  async loginUser(user: UserLoginDto): Promise<any> {
    try {
      const existUser = await this.userMongo.findOne({ email: user.email }).exec()
      if (existUser.email) {
        let checkPwd;

        await this.compareToHash(user.password, existUser.password).then(resp => {
          if (resp) {
            checkPwd = true
          } else {
            checkPwd = false
          }
        })

        if (checkPwd) {
          const authJsonWebToken = jwt.sign({user:existUser},env.secret_key)
          return await { success: true, token: authJsonWebToken }
        } else {
          return await {
            success: false,
            response: 'user password is incorrect'
          }
        }
      } else {
        return await {success:false,response:'user does not exist!'}
      }
    } catch (ex) {
      return await {
        success:false,
        response:'something wrong white login process'
      }
    }
  }

  async convertToHash(value: string) {
    let hashPwd;
    await bcrypt.hash(`${hashText}${value}`, saltRound).then(hash => {
      hashPwd = hash
    });
    return await hashPwd
  }

  async compareToHash(password, hashed) {
    const match = await bcrypt.compareSync(`${hashText}${password}`, hashed)
    return await match
  }
}