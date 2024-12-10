import { IsEmail, IsOptional, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class EditUserDto {
    @IsEmail()
    @IsOptional()
    @ApiProperty({ example: 'wafula@gmail.com', description: "user's email"})
    email?: string

    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'john', description: "User's first name"})
    firstName?: string

    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'wafula', description: "User's last name"})
    lastName?: string
}