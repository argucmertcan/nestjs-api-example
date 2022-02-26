export class UserCreateDto {
  name:string;
  surname:string;
  password:string;
  email:string;
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