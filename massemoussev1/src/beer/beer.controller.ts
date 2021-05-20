import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guards';
import { Role } from 'src/role/role.enums';
import { Roles } from 'src/role/roles.decorator';
import { BeerService } from './beer.service';


@Controller('beer')
export class BeerController {
    constructor (private readonly beerService : BeerService) {}

    @Get()
    async getAllBeers(){
        const beers = await this.beerService.getBeers();
        console.log ('ensemble des bières présente dans la db', beers);
        return beers; 
    }

    @Get('/id:id')
    getBeers(@Param('id') beerId: string){
        console.log('Beer selon id recherché');
        return this.beerService.getSingleBeerById(beerId);
    }

    @Get('/searchN')
    getBeers1(@Query('name') name: string){
        const beersT = this.beerService.filterByTitle(name);
        console.log('article filtré par nom', beersT);
        return beersT; 
    }

    @Get('/search')   
    getBeers2(@Query('search') letters:string){
        const beers = this.beerService.filterByLetters(letters);
        console.log('lettre', [beers]);
        return beers;
    }  

    @Post()
    @UseGuards(JwtAuthGuard)
    // @Roles(Role.Admin)
    async addBeer(
        @Body('id') beeId: string,
        @Body('name') beeName: string,
        @Body('city') beeCity: string,
        @Body('state ') beeState: string,
        @Body('price') beePrice: string,
        
        
    ){
        const generatedId = await  this.beerService.inserBeer(
            beeId,
            beeName,
            beeCity,
            beeState,
            beePrice,
        );
        return { id: generatedId };
      }

    //   @Roles(Role.Admin)
      @Patch(':id')
      @UseGuards(JwtAuthGuard)
      async updateBeer(
        @Param('id') beeId: string,
        @Body('name') beeName: string,
        @Body('city') beeCity: string,
        @Body('state') beeState: string,
        @Body('price') beePrice: string,
       
      ){
          await this.beerService.updateBeer(
            beeId,
            beeName,
            beeCity,
            beeState,
            beePrice
            )
          return null;
      }
  

} 
