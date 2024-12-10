import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ example: 'wafula@gmail.com', description: 'email address for user'})
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'wafula@123', description: 'password for user'})
    password: string
}