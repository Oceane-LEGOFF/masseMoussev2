import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { Role } from 'src/role/role.enums';
import { Roles } from 'src/role/roles.decorator';
import { ClientsService } from './clients.service';


@Controller('clients')
export class ClientsController {
    constructor (private readonly clientsService : ClientsService) {}

    @Get()
    async getAllClients(){
        const clients = await this.clientsService.getClients();
        console.log ('ensemble des clients présente dans la db', clients);
        return clients; 
    }

    @Get('/id:id')
    getClients(@Param('id') clientId: string){
        console.log('Client selon id recherché');
        return this.clientsService.getSingleClientById(clientId);
    }

    @Get('/searchN')
    getClients1(@Query('name') name: string){
        const clientsN = this.clientsService.filterByName(name);
        console.log('article filtré par nom', clientsN);
        return clientsN; 
    }

    @Get('/search')   
    getClients2(@Query('search') letters:string){
        const client = this.clientsService.filterByLetters(letters);
        console.log('lettre', [client]);
        return client;
    }  

    @Post()
    @UseGuards(JwtAuthGuard)
    // @Roles(Role.Admin)
    async addBeer(
        @Body('id') cliid: string,
        @Body('name') cliname: string,
        @Body('prenom ') cliprenom: string,
        @Body('naissance') clinaissance: string,
        @Body('mail') climail: string,
        @Body('mdp') climdp: string,
        @Body('role') clirole: string,
       
    )
    {
        const generatedId = await  this.clientsService.insertClient(
            cliid,
            cliname,
            cliprenom,
            clinaissance,
            climail,
            climdp,
            clirole,
        );
        return { id: generatedId };
    }

    //   @Roles(Role.Admin)
      @Patch(':id')
      @UseGuards(JwtAuthGuard)

      async updateClient(
        @Param('id') cliid: string,
        @Body('name') cliname: string,
        @Body('prenom ') cliprenom: string,
        @Body('naissance') clinaissance: string,
        @Body('mail') climail: string,
        @Body('mdp') climdp: string,
        @Body('role') clirole: string,
        
      ){
          await this.clientsService.updateClient(cliid,
            cliname,
            cliprenom,
            clinaissance,
            climail,
            climdp,
            clirole)
          return null;
      }
  

} 
