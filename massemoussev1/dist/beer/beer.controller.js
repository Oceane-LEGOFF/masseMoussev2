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
exports.BeerController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guards_1 = require("../auth/jwt-auth.guards");
const role_enums_1 = require("../role/role.enums");
const roles_decorator_1 = require("../role/roles.decorator");
const beer_service_1 = require("./beer.service");
let BeerController = class BeerController {
    constructor(beerService) {
        this.beerService = beerService;
    }
    async getAllBeers() {
        const beers = await this.beerService.getBeers();
        console.log('ensemble des bières présente dans la db', beers);
        return beers;
    }
    getBeers(beerId) {
        console.log('Beer selon id recherché');
        return this.beerService.getSingleBeerById(beerId);
    }
    getBeers1(name) {
        const beersT = this.beerService.filterByTitle(name);
        console.log('article filtré par nom', beersT);
        return beersT;
    }
    getBeers2(letters) {
        const beers = this.beerService.filterByLetters(letters);
        console.log('lettre', [beers]);
        return beers;
    }
    async addBeer(beeId, beeName, beeCity, beeState, beePrice, beePhoto, beeDescription) {
        const generatedId = await this.beerService.inserBeer(beeId, beeName, beeCity, beeState, beePrice, beePhoto, beeDescription);
        return { id: generatedId };
    }
    async updateBeer(beeId, beeName, beeCity, beeState, beePrice, beePhoto, beeDescription) {
        await this.beerService.updateBeer(beeId, beeName, beeCity, beeState, beePrice, beePhoto, beeDescription);
        return null;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BeerController.prototype, "getAllBeers", null);
__decorate([
    common_1.Get('/id:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeerController.prototype, "getBeers", null);
__decorate([
    common_1.Get('/searchN'),
    __param(0, common_1.Query('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeerController.prototype, "getBeers1", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Query('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeerController.prototype, "getBeers2", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, common_1.Body('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('city')),
    __param(3, common_1.Body('state ')),
    __param(4, common_1.Body('price')),
    __param(5, common_1.Body('photo')),
    __param(6, common_1.Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], BeerController.prototype, "addBeer", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('city')),
    __param(3, common_1.Body('state')),
    __param(4, common_1.Body('price')),
    __param(5, common_1.Body('photo')),
    __param(6, common_1.Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], BeerController.prototype, "updateBeer", null);
BeerController = __decorate([
    common_1.Controller('beer'),
    __metadata("design:paramtypes", [beer_service_1.BeerService])
], BeerController);
exports.BeerController = BeerController;
//# sourceMappingURL=beer.controller.js.map