import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
