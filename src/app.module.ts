import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import env from '../tools/environments/env'


@Module({
  imports: [UserModule,CategoryModule,MongooseModule.forRoot(env.mongo_url)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
