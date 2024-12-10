import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto/';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('me')
    @ApiOperation({ summary: 'Get my info' })
    getMe(@GetUser('id') userId: number) {
        return this.userService.getUser(userId);
    }

    @Patch()
    @ApiOperation({ summary: 'Edit user info' })
    editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
        return this.userService.editUser(userId, dto)
    }
}
