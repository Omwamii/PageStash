import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional, IsEmail } from 'class-validator';
import { BookMarkDto } from '../../bookmark/dto';

// Fields to be returned when User is queried ( with gql)
// exclude hash, createdAt & updatedAt ?

@ObjectType()
export class UserDto {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field(type => [BookMarkDto], { nullable: 'items' })
  bookmarks: BookMarkDto[];
}
