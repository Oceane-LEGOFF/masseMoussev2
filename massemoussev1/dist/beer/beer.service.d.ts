import { Model } from 'mongoose';
import { Beer } from './beer.model';
export declare class BeerService {
    private readonly beerModel;
    private beers;
    constructor(beerModel: Model<Beer>);
    getBeers(): Promise<{
        id: string;
        obdb_id: string;
        title: string;
        name: string;
        brewery_type: string;
        street: string;
        adresse_2: string;
        adresse_3: string;
        city: string;
        state: string;
        country_province: string;
        postal_code: string;
        country: string;
        longiture: string;
        latitude: string;
        phone: string;
        website_url: string;
        updated_at: string;
        created_at: string;
    }[]>;
    getBeers1(): Promise<{
        id: string;
        obdb_id: string;
        title: string;
        name: string;
        brewery_type: string;
        street: string;
        adresse_2: string;
        adresse_3: string;
        city: string;
        state: string;
        country_province: string;
        postal_code: string;
        country: string;
        longiture: string;
        latitude: string;
        phone: string;
        website_url: string;
        updated_at: string;
        created_at: string;
    }[]>;
    getBeers2(): Promise<{
        id: string;
        obdb_id: string;
        title: string;
        name: string;
        brewery_type: string;
        street: string;
        adresse_2: string;
        adresse_3: string;
        city: string;
        state: string;
        country_province: string;
        postal_code: string;
        country: string;
        longiture: string;
        latitude: string;
        phone: string;
        website_url: string;
        updated_at: string;
        created_at: string;
    }[]>;
    getSingleBeerById(beerId: string): Promise<{
        id: any;
        obdb_id: any;
        title: any;
        name: any;
        brewery_type: any;
        street: any;
        adresse_2: any;
        adresse_3: any;
        city: any;
        state: any;
        country_province: any;
        postal_code: any;
        country: any;
        longiture: any;
        latitude: any;
        phone: any;
        website_url: any;
        updated_at: any;
        created_at: any;
    }>;
    private findBeerById;
    filterByTitle(name: string): Promise<Beer[]>;
    filterByLetters(letters: string): Promise<Beer[]>;
    inserBeer(id: string, obdb_id: string, title: string, name: string, brewery_type: string, street: string, adresse_2: string, adresse_3: string, city: string, state: string, country_province: string, postal_code: string, country: string, longitude: string, latitude: string, phone: string, website_url: string, updated_at: string, created_at: string): Promise<string>;
}
