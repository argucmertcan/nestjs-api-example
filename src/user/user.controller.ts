import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserCreateDto, UserLoginDto, UserUpdateDto } from 'src/user/user.interface';
import { UserModel } from 'src/user/models/user.model';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Actions')
@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {
  }

  @Post('login')
  async loginUser(@Body() body: UserLoginDto): Promise<UserModel> {
    return await this.UserService.loginUser(body)
  }

  @Post()
  async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
    body.password = await this.UserService.convertToHash(body.password)
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
