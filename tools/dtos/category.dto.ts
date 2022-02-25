export class CategoryCreateDto  {
  title:string;
  parent:boolean;
  createdAt:Date;
}

export class CategoryUpdateDto {
  title:string;
  parent:boolean;
}