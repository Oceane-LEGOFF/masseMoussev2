import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Beer} from './beer.model'

@Injectable()
export class BeerService {
    private beers : Beer[] = [];

    constructor (@InjectModel ('Beer') private readonly beerModel : Model <Beer>) {}

    async getBeers() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => 
            ({id: ber.id, 
            name: ber.name,
            city: ber.city,
            state: ber.state,
            price: ber.price,
            photo: ber.photo,
            description: ber.description
            }))
    }

    async getBeers1() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({id: ber.id, 
            name: ber.name,
            city: ber.city,
            state: ber.state,
            price: ber.price,
            photo: ber.photo,
            description: ber.description}))
    }

    async getBeers2() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({id: ber.id, 
            name: ber.name,
            city: ber.city,
            state: ber.state,
            price: ber.price,
            photo: ber.photo,
            description: ber.description}))
    }

    async getSingleBeerById(beerId: string): Promise<{ id: any; name: any, city: any, state: any, price: any, photo: any, description: any}>{
        const beer = await this.findBeerById(beerId);
        console.log('beer', beer);
        return {id: beer.id, 
            name: beer.name,
            city: beer.city,
            state: beer.state,
            price: beer.price,
            photo: beer.photo,
            description: beer.description} 
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
        console.log('beer filtré par nom, beers', beers[name]);
        return beers[name];
    }


    async filterByLetters(letters: string): Promise <Beer[]> {
        const beersL = await this.beerModel.find({}).where('name').regex(letters);
        console.log('Voici les beers contenant la lettre', letters, beersL);
        return beersL; 
    }

    async inserBeer (id: string,
        name: string,
        city: string, 
        state: string,
        price: string,
        photo: string,
        description: string
    )
    {
        const newBeer = new this.beerModel({id, name, city, state, price, photo, description});
        const result = await newBeer.save();
        console.log(result);
        return result.id as string;
    }

    async updateBeer (id: string,
        name: string,
        city: string, 
        state: string,
        price: string,
        photo: string,
        description: string)
        {
        const updateBeer = await this.findBeerById(id);
        
        if(id){
            updateBeer.id = id;
        }if(name){
            updateBeer.name = name;
        }if(city){
            updateBeer.city = city;
        }if(state){
            updateBeer.state = state;
        }if(price){
            updateBeer.price = price;
        }if(photo){
            updateBeer.photo = photo;
        }if(description){
            updateBeer.description = description;
        }
        updateBeer.save();
            
    }

}
