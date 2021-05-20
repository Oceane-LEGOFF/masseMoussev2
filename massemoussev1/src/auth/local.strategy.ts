import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Client, ClientsService } from 'src/clients/clients.service'

// stratégie d'authentification en local 

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); // constructor appel super sans objet d'option. Il prend user et password 
  }

  async validate(mail: string, mdp: string): Promise<Client> { // méthode validate avec comme signature (username et password)
    const user = await this.authService.validateUser(mail, mdp);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}