import { IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookmarkDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Remote jobs', description: 'Title of the bookmark'})
    title: string

    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'Expertly curated remote jobs in tech', description: 'A short description of the bookmark'})
    description?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'https://jobspresso.co/', description: 'Link to the bookmark'})
    link: string
}