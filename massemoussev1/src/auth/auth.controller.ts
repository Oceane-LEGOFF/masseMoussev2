// import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
// import { ClientRequest } from 'http';
// import { ClientsService } from 'src/clients/clients.service';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {

//     constructor(private readonly authService: AuthService, private readonly clientsService: ClientsService ) {}

//     @Post('email/login')
//     @HttpCode(HttpStatus.OK)
//     public async login(@Body() ClientRequest: ClientsService): Promise<ClientsService> {
//       try {
//         var response = await this.authService.validateUser(client.email, client.mdp);
//         return new ResponseSuccess("LOGIN.SUCCESS", response);
//       } catch(error) {
//         return new ResponseError("LOGIN.ERROR", error);
//       }
//     }

