import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
import { LocalAuthGuard } from './auth/local-auth.guards';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards (LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    console.log("erreur")

    return this.authService.login(req.user );
  }

  @UseGuards(JwtAuthGuard)
  @Get('clients')
  getProfil(@Request() req){
    return req.user;
  }

  // @UseGuards(LocalAuthGuard)
  // @Post()
  // getProfile(@Request() req ){
  //   return this.authService.login(req.user);
  // }
}
