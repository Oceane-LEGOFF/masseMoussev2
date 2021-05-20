import { BeerService } from './beer.service';
export declare class BeerController {
    private readonly beerService;
    constructor(beerService: BeerService);
    getAllBeers(): Promise<{
        id: any;
        name: string;
        city: string;
        state: string;
        price: string;
    }[]>;
    getBeers(beerId: string): Promise<{
        id: any;
        name: any;
        city: any;
        state: any;
        price: any;
    }>;
    getBeers1(name: string): Promise<import("./beer.model").Beer[]>;
    getBeers2(letters: string): Promise<import("./beer.model").Beer[]>;
    addBeer(beeId: string, beeName: string, beeCity: string, beeState: string, beePrice: string): Promise<{
        id: string;
    }>;
    updateBeer(beeId: string, beeName: string, beeCity: string, beeState: string, beePrice: string): Promise<any>;
}
