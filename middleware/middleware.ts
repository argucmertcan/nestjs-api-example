import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import env from '../environments/env'

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const authJsonWebToken = req.headers.authorization
    console.log("asasas",)
    if (req.url !== '/user/login') {
      if (!authJsonWebToken) {
        next()
        throw new HttpException('JWT Could not found !',HttpStatus.FORBIDDEN)
      } else {
        try {
          const user = jwt.verify(authJsonWebToken.slice(7,authJsonWebToken.length),env.secret_key)
          if (user) {
            req['user'] = user
            next();
          } else {
            throw new HttpException(
              'something went wrong',
              HttpStatus.GATEWAY_TIMEOUT
            )
          }
        } catch (error) {
          throw new HttpException(error,HttpStatus.UNAUTHORIZED)
        }
      }
     
    } else {
      next();
      return;
    }
  }
}