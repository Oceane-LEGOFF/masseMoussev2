import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Client } from 'src/clients/clients.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(mail: string, mdp: string): Promise<Client>;
}
export {};
