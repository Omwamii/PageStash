import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { ApiOperation } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) {}

    @Get()
    @ApiOperation({ summary: "Get a user's bookmarks" })
    getBookmarks(@GetUser('id') userId: number) {
        return this.bookmarkService.getBookmarks(userId)
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a bookmark' })
    getBookmarkById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.getBookmarkById(userId, bookmarkId)
    }

    @Post()
    @ApiOperation({ summary: 'Create a bookmark' })
    createBookmark(@GetUser('id') userId: number, @Body() dto: CreateBookmarkDto) {
        return this.bookmarkService.createBookmark(userId, dto)
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Edit a bookmark' })
    editBookmarkById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number, @Body() dto: EditBookmarkDto) {
        return this.bookmarkService.editBookmarkById(userId, bookmarkId, dto)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a bookmark' })
    deleteBookmarkById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number) {
        return this.bookmarkService.deleteBookmarkById(userId, bookmarkId)
    }

}
