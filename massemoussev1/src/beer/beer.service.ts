import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { stat } from 'fs';
import { Model } from 'mongoose';


import { Beer} from './beer.model'

@Injectable()
export class BeerService {
    private beers : Beer[] = [];

    constructor (@InjectModel ('Beer') private readonly beerModel : Model <Beer>) {}

    async getBeers() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({id: ber.id, 
            obdb_id: ber.obdb_id, 
            title: ber.title, name:ber.name, 
            brewery_type:ber.brewery_type, 
            street: ber.street, 
            adresse_2: ber.adresse_2, 
            adresse_3: ber.adresse_3,
            city: ber.city,
            state: ber.state,
            country_province: ber.country_province,
            postal_code: ber.postal_code,
            country: ber.country,
            longiture: ber.longitude,
            latitude: ber.latitude,
            phone: ber.phone,
            website_url: ber.website_url,
            updated_at: ber.updated_at,
            created_at: ber.created_at}))
    }

    async getBeers1() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({id: ber.id, 
            obdb_id: ber.obdb_id, 
            title: ber.title, name:ber.name, 
            brewery_type:ber.brewery_type, 
            street: ber.street, 
            adresse_2: ber.adresse_2, 
            adresse_3: ber.adresse_3,
            city: ber.city,
            state: ber.state,
            country_province: ber.country_province,
            postal_code: ber.postal_code,
            country: ber.country,
            longiture: ber.longitude,
            latitude: ber.latitude,
            phone: ber.phone,
            website_url: ber.website_url,
            updated_at: ber.updated_at,
            created_at: ber.created_at}))
    }

    async getBeers2() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({id: ber.id, 
            obdb_id: ber.obdb_id, 
            title: ber.title, name:ber.name, 
            brewery_type:ber.brewery_type, 
            street: ber.street, 
            adresse_2: ber.adresse_2, 
            adresse_3: ber.adresse_3,
            city: ber.city,
            state: ber.state,
            country_province: ber.country_province,
            postal_code: ber.postal_code,
            country: ber.country,
            longiture: ber.longitude,
            latitude: ber.latitude,
            phone: ber.phone,
            website_url: ber.website_url,
            updated_at: ber.updated_at,
            created_at: ber.created_at}))
    }

    async getSingleBeerById(beerId: string): Promise<{ id: any; obdb_id: any; title: any; name: any; brewery_type: any; street: any; adresse_2: any; adresse_3: any; city: any; state: any; country_province: any; postal_code: any; country: any; longiture: any; latitude: any; phone: any; website_url: any; updated_at: any; created_at: any; }>{
        const beer = await this.findBeerById(beerId);
        console.log('beer', beer);
        return {id: beer.id,
            obdb_id: beer.obdb_id, 
            title: beer.title, 
            name:beer.name, 
            brewery_type:beer.brewery_type, 
            street: beer.street, 
            adresse_2: beer.adresse_2, 
            adresse_3: beer.adresse_3,
            city: beer.city,
            state: beer.state,
            country_province: beer.country_province,
            postal_code: beer.postal_code,
            country: beer.country,
            longiture: beer.longitude,
            latitude: beer.latitude,
            phone: beer.phone,
            website_url: beer.website_url,
            updated_at: beer.updated_at,
            created_at: beer.created_at} 
    }

    private async findBeerById (id: string): Promise <Beer>{
        let beer
        try{
            beer = await this.beerModel.findById(id);
            return beer;
        }catch(error){
            throw new NotFoundException ('Le produit n'+'a pas été trouvé selon l'+'id')
        }

    }

    async filterByTitle(name: string): Promise <Beer[]> {
        const beers = await this.beerModel.find({}).where('name').equals(name). lean();
        console.log('beer filtré par nom, beers', beers);
        return beers[name];
    }

    async filterByLetters(letters: string): Promise <Beer[]> {
        const beersT = await this.beerModel.find({}).where('title').regex(letters);
        console.log('Voici les beers contenant la lettre', letters, beersT);
        return beersT[letters]; 
    }

    async inserBeer (id: string,
    obdb_id: string,
    title: string,
    name: string,
    brewery_type: string,
    street: string,
    adresse_2: string,
    adresse_3: string,
    city: string,
    state: string,
    country_province: string,
    postal_code: string,
    country: string,
    longitude: string,
    latitude: string,
    phone: string,
    website_url: string,
    updated_at: string,
    created_at: string)
    {
        const newBeer = new this.beerModel({id, obdb_id, title, name, brewery_type, street, adresse_2, adresse_3, city, state, country_province,postal_code, country, longitude, latitude, phone, website_url,updated_at, created_at });
        const result = await newBeer.save();
        console.log(result);
        return result.id as string;
    }

}