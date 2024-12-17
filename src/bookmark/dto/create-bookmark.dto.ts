import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateBookmarkDto {
  @Field(() => String, { description: 'Title of the bookmark' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, {
    nullable: true,
    description: 'A short description of the bookmark',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => String, { description: 'Link to the bookmark' })
  @IsString()
  @IsNotEmpty()
  link: string;
}
