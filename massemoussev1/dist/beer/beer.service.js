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
            obdb_id: ber.obdb_id,
            title: ber.title, name: ber.name,
            brewery_type: ber.brewery_type,
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
            created_at: ber.created_at }));
    }
    async getBeers1() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({ id: ber.id,
            obdb_id: ber.obdb_id,
            title: ber.title, name: ber.name,
            brewery_type: ber.brewery_type,
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
            created_at: ber.created_at }));
    }
    async getBeers2() {
        const beers = await this.beerModel.find().exec();
        return beers.map((ber) => ({ id: ber.id,
            obdb_id: ber.obdb_id,
            title: ber.title, name: ber.name,
            brewery_type: ber.brewery_type,
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
            created_at: ber.created_at }));
    }
    async getSingleBeerById(beerId) {
        const beer = await this.findBeerById(beerId);
        console.log('beer', beer);
        return { id: beer.id,
            obdb_id: beer.obdb_id,
            title: beer.title,
            name: beer.name,
            brewery_type: beer.brewery_type,
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
            created_at: beer.created_at };
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
        console.log('beer filtré par nom, beers', beers);
        return beers[name];
    }
    async filterByLetters(letters) {
        const beersT = await this.beerModel.find({}).where('title').regex(letters);
        console.log('Voici les beers contenant la lettre', letters, beersT);
        return beersT[letters];
    }
    async inserBeer(id, obdb_id, title, name, brewery_type, street, adresse_2, adresse_3, city, state, country_province, postal_code, country, longitude, latitude, phone, website_url, updated_at, created_at) {
        const newBeer = new this.beerModel({ id, obdb_id, title, name, brewery_type, street, adresse_2, adresse_3, city, state, country_province, postal_code, country, longitude, latitude, phone, website_url, updated_at, created_at });
        const result = await newBeer.save();
        console.log(result);
        return result.id;
    }
    async updateBeer(id, obdb_id, title, name, brewery_type, street, adresse_2, adresse_3, city, state, country_province, postal_code, country, longitude, latitude, phone, website_url, updated_at, created_at) {
        const updateBeer = await this.findBeerById(id);
        if (id) {
            updateBeer.id = id;
        }
        if (obdb_id) {
            updateBeer.obdb_id = obdb_id;
        }
        if (title) {
            updateBeer.title = title;
        }
        if (name) {
            updateBeer.name = name;
        }
        if (brewery_type) {
            updateBeer.brewery_type = brewery_type;
        }
        if (street) {
            updateBeer.street = street;
        }
        if (adresse_2) {
            updateBeer.adresse_2 = adresse_2;
        }
        if (adresse_3) {
            updateBeer.adresse_3 = adresse_3;
        }
        if (city) {
            updateBeer.city = city;
        }
        if (state) {
            updateBeer.state = state;
        }
        if (country_province) {
            updateBeer.country_province = country_province;
        }
        if (postal_code) {
            updateBeer.postal_code = postal_code;
        }
        if (country) {
            updateBeer.country = country;
        }
        if (longitude) {
            updateBeer.longitude = longitude;
        }
        if (latitude) {
            updateBeer.latitude = latitude;
        }
        if (phone) {
            updateBeer.phone = phone;
        }
        if (phone) {
            updateBeer.phone = phone;
        }
        if (website_url) {
            updateBeer.website_url = website_url;
        }
        if (updated_at) {
            updateBeer.updated_at = updated_at;
        }
        if (created_at) {
            updateBeer.created_at = created_at;
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