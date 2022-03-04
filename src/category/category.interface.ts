import { ApiProperty } from "@nestjs/swagger";

export class CategoryCreateDto  {
  @ApiProperty()
  title:string;
  @ApiProperty()
  parent:boolean;
  @ApiProperty()
  createdAt:Date;
}

export class CategoryUpdateDto {
  @ApiProperty()
  title:string;
  @ApiProperty()
  parent:boolean;
}