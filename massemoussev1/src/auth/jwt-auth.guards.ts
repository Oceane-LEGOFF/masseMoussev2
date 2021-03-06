import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(contexte: ExecutionContext){

        
        return super.canActivate(contexte);
    }

    handleRequest(err, user) {
        if (err ||!user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
