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
        @Body('id') beeid: string,
        @Body('obdb_id') beeobdb_id: string,
        @Body('title ') betitle: string,
        @Body('name') beename: string,
        @Body('brewery_type') beebrewery_type: string,
        @Body('street') beestreet: string,
        @Body('adresse_2') beeadresse_2: string,
        @Body('adresse_3') beeadresse_3: string,
        @Body('city') beecity: string,
        @Body('state') beestate: string,
        @Body('country_province') beecountry_province: string,
        @Body('postal_code') beepostal_code: string,
        @Body('country') beecountry: string,
        @Body('longitude') beelongitude: string,
        @Body('latitude') beelatitude: string,
        @Body('phone') beephone: string,
        @Body('website_url') beewebsite_url: string,
        @Body('update_at') beeupdate_at: string,
        @Body('created_at') beecreated_at: string,
        
    ){
        const generatedId = await  this.beerService.inserBeer(
            beeid,
            beeobdb_id,
            betitle,
            beename,
            beebrewery_type,
            beestreet,
            beeadresse_2,
            beeadresse_3,
            beecity,
            beestate,
            beecountry_province,
            beepostal_code,
            beecountry,
            beelongitude,
            beelatitude,
            beephone,
            beewebsite_url,
            beeupdate_at,
            beecreated_at
            
        );
        return { id: generatedId };
      }

    //   @Roles(Role.Admin)
      @Patch(':id')
      @UseGuards(JwtAuthGuard)

      async updateBeer(
        @Param('id') beeid: string,
        @Body('obdb_id') beeobdb_id: string,
        @Body('title ') betitle: string,
        @Body('name') beename: string,
        @Body('brewery_type') beebrewery_type: string,
        @Body('street') beestreet: string,
        @Body('adresse_2') beeadresse_2: string,
        @Body('adresse_3') beeadresse_3: string,
        @Body('city') beecity: string,
        @Body('state') beestate: string,
        @Body('country_province') beecountry_province: string,
        @Body('postal_code') beepostal_code: string,
        @Body('country') beecountry: string,
        @Body('longitude') beelongitude: string,
        @Body('latitude') beelatitude: string,
        @Body('phone') beephone: string,
        @Body('website_url') beewebsite_url: string,
        @Body('update_at') beeupdate_at: string,
        @Body('created_at') beecreated_at: string,
      ){
          await this.beerService.updateBeer(beeid,
            beeobdb_id,
            betitle,
            beename,
            beebrewery_type,
            beestreet,
            beeadresse_2,
            beeadresse_3,
            beecity,
            beestate,
            beecountry_province,
            beepostal_code,
            beecountry,
            beelongitude,
            beelatitude,
            beephone,
            beewebsite_url,
            beeupdate_at,
            beecreated_at)
          return null;
      }
  

} 
