import { Strategy } from 'passport-jwt';
import { Client } from 'src/clients/clients.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: Client): Promise<{
        mdp: any;
        mail: any;
    }>;
}
export {};
