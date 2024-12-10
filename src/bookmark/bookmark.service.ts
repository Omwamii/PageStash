import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService) {}

    getBookmarks(userId: number) {
        return this.prisma.bookMark.findMany({
            where: {
                userId,
            },
        })
    }

    getBookmarkById(userId: number, bookmarkId: number) {
        return this.prisma.bookMark.findFirst({
            where: {
                id: bookmarkId,
                userId,
            }
        })
    }

    async createBookmark(userId: number, dto: CreateBookmarkDto) {
        const bookMark = await this.prisma.bookMark.create({
            data: {
                userId: userId,
                ...dto,
            }
        })
    }

    async editBookmarkById(userId: number, bookmarkId, dto: EditBookmarkDto) {
        const bookmark = await this.prisma.bookMark.findUnique({
            where: {
                id: bookmarkId,
            }
        })

        if (!bookmark || bookmark.userId !== userId) {
            throw new ForbiddenException('Access denied');
        }

        return this.prisma.bookMark.update({
            where: {
                id: bookmarkId
            },

            data: {
                ...dto,
            }
        })
    }

    async deleteBookmarkById(userId: number, bookmarkId: number) {

        const bookmark = await this.prisma.bookMark.findUnique({
            where: {
                id: bookmarkId,
            }
        })

        if (!bookmark || bookmark.userId !== userId) {
            throw new ForbiddenException('Access denied');
        }

        await this.prisma.bookMark.delete({
            where: {
                id: bookmarkId,
            }
        })
    }

}
