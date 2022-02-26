import { IsDate, IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserCreateDto {
  @IsNotEmpty()
  @Length(2,20)
  name:string;
  surname:string;
  password:string;
  @IsEmail()
  email:string;
  @IsDate()
  birthDay:Date;
}

export class UserUpdateDto {
  name:string;
  surname:string;
  password:string;
  email:string;
  birthDay:Date;
}

export class UserLoginDto {
  email:string;
  password:string;
}