import { JwtService } from '@nestjs/jwt';
import { ClientsService } from 'src/clients/clients.service';
export declare class AuthService {
    private clientsService;
    private jwtService;
    constructor(clientsService: ClientsService, jwtService: JwtService);
    validateUser(mail: string, mdp: string): Promise<any>;
    login(client: any): Promise<{
        access_token: string;
    }>;
}
