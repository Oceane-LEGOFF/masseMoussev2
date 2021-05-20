import { Model } from 'mongoose';
import { Beer } from './beer.model';
export declare class BeerService {
    private readonly beerModel;
    private beers;
    constructor(beerModel: Model<Beer>);
    getBeers(): Promise<{
        id: any;
        name: string;
        city: string;
        state: string;
        price: string;
        photo: string;
    }[]>;
    getBeers1(): Promise<{
        id: any;
        name: string;
        city: string;
        state: string;
        price: string;
        photo: string;
    }[]>;
    getBeers2(): Promise<{
        id: any;
        name: string;
        city: string;
        state: string;
        price: string;
        photo: string;
    }[]>;
    getSingleBeerById(beerId: string): Promise<{
        id: any;
        name: any;
        city: any;
        state: any;
        price: any;
        photo: any;
    }>;
    private findBeerById;
    filterByTitle(name: string): Promise<Beer[]>;
    filterByLetters(letters: string): Promise<Beer[]>;
    inserBeer(id: string, name: string, city: string, state: string, price: string, photo: string): Promise<string>;
    updateBeer(id: string, name: string, city: string, state: string, price: string, photo: string): Promise<void>;
}
