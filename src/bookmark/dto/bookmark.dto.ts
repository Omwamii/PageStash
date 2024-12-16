import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional, IsUrl } from 'class-validator';

@ObjectType()
export class BookMarkDto {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  @IsString()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field()
  @IsUrl()
  link: string;

  @Field(() => Int)
  @IsInt()
  userId: number;

}
