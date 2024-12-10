import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { ApiOperation } from '@nestjs/swagger';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('signup')
    @ApiOperation({ summary: 'Sing up user' })
    signup(@Body() dto: AuthDto) {
        console.log(dto);
        return this.authService.signup(dto)
    }

    @Post('signin')
    @ApiOperation({ summary: 'Sign in user' })
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto)
    }
}