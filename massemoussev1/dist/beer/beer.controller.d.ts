import { BeerService } from './beer.service';
export declare class BeerController {
    private readonly beerService;
    constructor(beerService: BeerService);
    getAllBeers(): Promise<{
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
    getBeers(beerId: string): Promise<{
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
    getBeers1(name: string): any;
    getBeers2(letters: string): any;
    addBeer(beeid: string, beeobdb_id: string, betitle: string, beename: string, beebrewery_type: string, beestreet: string, beeadresse_2: string, beeadresse_3: string, beecity: string, beestate: string, beecountry_province: string, beepostal_code: string, beecountry: string, beelongitude: string, beelatitude: string, beephone: string, beewebsite_url: string, beeupdate_at: string, beecreated_at: string): Promise<{
        id: string;
    }>;
    updateBeer(beeid: string, beeobdb_id: string, betitle: string, beename: string, beebrewery_type: string, beestreet: string, beeadresse_2: string, beeadresse_3: string, beecity: string, beestate: string, beecountry_province: string, beepostal_code: string, beecountry: string, beelongitude: string, beelatitude: string, beephone: string, beewebsite_url: string, beeupdate_at: string, beecreated_at: string): Promise<any>;
}
