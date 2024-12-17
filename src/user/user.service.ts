import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, EditUserDto } from './dto';
import * as argon from 'argon2'
import { throws } from 'assert';

@Injectable()
export class UserService {
    selectFields =  {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        hash: false,
        bookmarks: true,
    }

    constructor(private prisma: PrismaService){}

    async createUser (dto: CreateUserDto) {
        const hash = await argon.hash(dto.password);
        delete dto.password // add hash instead
        const user = await this.prisma.user.create({
            data: {
                ...dto,
                hash
            },
            select: this.selectFields
        })

        return user;
    }

    async editUser(userId: number, dto: EditUserDto) {
        const user = await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...dto
            },
            select: this.selectFields
        })

        delete user.hash;
        return user;
    }

    async getUser(userId: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: this.selectFields
        })

        return user;
    }

    async getUsers() {
        return this.prisma.user.findMany({
            select: this.selectFields
        });
    }

    async deleteUser(userId: number) {
        return this.prisma.user.delete({
            where: {
                id: userId,
            },
            select: this.selectFields
        })
    }
}
