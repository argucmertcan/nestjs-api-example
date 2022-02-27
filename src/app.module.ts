import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import env from '../environments/env'
import { TokenMiddleware } from 'middleware/middleware';


@Module({
  imports: [UserModule,CategoryModule,MongooseModule.forRoot(env.mongo_url)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(TokenMiddleware).forRoutes({path:'*',method:RequestMethod.ALL})
  }
}
