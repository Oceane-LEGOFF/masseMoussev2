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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guards_1 = require("../auth/jwt-auth.guards");
const clients_service_1 = require("./clients.service");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    async getAllClients() {
        const clients = await this.clientsService.getClients();
        console.log('ensemble des clients présente dans la db', clients);
        return clients;
    }
    getClients(clientId) {
        console.log('Client selon id recherché');
        return this.clientsService.getSingleClientById(clientId);
    }
    getClients3(letters) {
        const client = this.clientsService.filterByLetters(letters);
        console.log('lettre', [client]);
        return client;
    }
    getClients2(letters) {
        const client = this.clientsService.filterByLetters0(letters);
        console.log('lettre', [client]);
        return client;
    }
    async addBeer(cliid, cliname, cliprenom, clinaissance, climail, climdp, clirole) {
        const generatedId = await this.clientsService.insertClient(cliid, cliname, cliprenom, clinaissance, climail, climdp, clirole);
        return { id: generatedId };
    }
    async updateClient(cliid, cliname, cliprenom, clinaissance, climail, climdp, clirole) {
        await this.clientsService.updateClient(cliid, cliname, cliprenom, clinaissance, climail, climdp, clirole);
        return null;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "getAllClients", null);
__decorate([
    common_1.Get('/id:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getClients", null);
__decorate([
    common_1.Get('/searchM'),
    __param(0, common_1.Query('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getClients3", null);
__decorate([
    common_1.Get('/searchN'),
    __param(0, common_1.Query('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getClients2", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('prenom ')),
    __param(3, common_1.Body('naissance')),
    __param(4, common_1.Body('mail')),
    __param(5, common_1.Body('mdp')),
    __param(6, common_1.Body('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "addBeer", null);
__decorate([
    common_1.Patch(':id'),
    common_1.UseGuards(jwt_auth_guards_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('prenom ')),
    __param(3, common_1.Body('naissance')),
    __param(4, common_1.Body('mail')),
    __param(5, common_1.Body('mdp')),
    __param(6, common_1.Body('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "updateClient", null);
ClientsController = __decorate([
    common_1.Controller('clients'),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
exports.ClientsController = ClientsController;
//# sourceMappingURL=clients.controller.js.map