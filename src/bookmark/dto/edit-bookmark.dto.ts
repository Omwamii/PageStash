import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class EditBookmarkDto {
  @Field(() => String, {
    nullable: true,
    description: 'Title of the bookmark',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => String, {
    nullable: true,
    description: 'A short description of the bookmark',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Link to the bookmark',
  })
  @IsString()
  @IsOptional()
  link?: string;
}
