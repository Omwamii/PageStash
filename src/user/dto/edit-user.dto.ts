import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class EditUserDto {
  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  @ApiProperty({ example: 'wafula@gmail.com', description: "user's email" })
  email?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'john', description: "User's first name" })
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'wafula', description: "User's last name" })
  lastName?: string;
}
