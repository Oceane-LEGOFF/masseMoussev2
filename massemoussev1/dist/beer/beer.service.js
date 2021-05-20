"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BeerService = class BeerService {
    constructor(beerModel) {
        this.beerModel = beerModel;
        this.beers = [];
    }
    async getBeers() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({ id: ber.id,
            name: ber.name,
            city: ber.city,
            state: ber.state,
            price: ber.price
        }));
    }
    async getBeers1() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({ id: ber.id,
            name: ber.name,
            city: ber.city,
            state: ber.state,
            price: ber.price }));
    }
    async getBeers2() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({ id: ber.id,
            name: ber.name,
            city: ber.city,
            state: ber.state,
            price: ber.price }));
    }
    async getSingleBeerById(beerId) {
        const beer = await this.findBeerById(beerId);
        console.log('beer', beer);
        return { id: beer.id,
            name: beer.name,
            city: beer.city,
            state: beer.state,
            price: beer.price };
    }
    async findBeerById(id) {
        let beer;
        try {
            beer = await this.beerModel.findById(id);
            return beer;
        }
        catch (error) {
            throw new common_1.NotFoundException('Le produit n' + 'a pas été trouvé selon l' + 'id');
        }
    }
    async filterByTitle(name) {
        const beers = await this.beerModel.find({}).where('name').equals(name).lean();
        console.log('beer filtré par nom, beers', beers[name]);
        return beers[name];
    }
    async filterByLetters(letters) {
        const beersL = await this.beerModel.find({}).where('name').regex(letters);
        console.log('Voici les beers contenant la lettre', letters, beersL);
        return beersL;
    }
    async inserBeer(id, name, city, state, price) {
        const newBeer = new this.beerModel({ id, name, city, state, price });
        const result = await newBeer.save();
        console.log(result);
        return result.id;
    }
    async updateBeer(id, name, city, state, price) {
        const updateBeer = await this.findBeerById(id);
        if (id) {
            updateBeer.id = id;
        }
        if (name) {
            updateBeer.name = name;
        }
        if (city) {
            updateBeer.city = city;
        }
        if (state) {
            updateBeer.state = state;
        }
        if (price) {
            updateBeer.price = price;
        }
        updateBeer.save();
    }
};
BeerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Beer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BeerService);
exports.BeerService = BeerService;
//# sourceMappingURL=beer.service.js.map