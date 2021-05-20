import { Injectable } from '@nestjs/common';
// import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { ClientsService } from 'src/clients/clients.service';

// récupère un user et vérifie le mdp 
// la plus part du travail de validation est effectué ici

@Injectable()
export class AuthService {
    constructor (
        private clientsService: ClientsService,
        private jwtService: JwtService
        ) {}

     async validateUser (mail: string, mdp: string): Promise<any> { // validateUser à pour mission de récupérer un User et vérifier mdp
         const user = await this.clientsService.findOne(mail);
         if (user && user.mdp === mdp, mail) {
             const {mdp, ...result} = user;
             console.log(user, "users")
             return result; 
         }

         return null; 
     }

     async login (client: any) {
         const playload = {mail: client.mail, mdp: client.mdp};
         console.log('playload', playload)
         return{
             access_token: this.jwtService.sign(playload),
         };
     }
}
