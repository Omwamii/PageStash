import { IsOptional, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class EditBookmarkDto {
    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'Remote tech jobs', description: 'Title of the bookmark'})
    title?: string

    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'Expertly curated remote jobs in tech', description: 'A short description of the bookmark'})
    description?: string

    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'https://jobspresso.co/', description: 'Link to the bookmark'})
    link?: string
}