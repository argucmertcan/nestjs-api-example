import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {
  }

  @Post()
  async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
    return await this.UserService.create(body)
  }

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return await this.UserService.findAll();
  }

  @Get(':id')
  async getUser(@Param() params): Promise<UserModel> {
    return await this.UserService.findOne(params.id)
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() UserUpdateDto: UserUpdateDto): Promise<UserModel> {
    return await this.UserService.update(id, UserUpdateDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return await this.UserService.delete(id);
  }


}
