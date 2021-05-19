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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientsService = class ClientsService {
    constructor(clientsModel) {
        this.clientsModel = clientsModel;
        this.clients = [];
    }
    async getClients() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({ id: cli.id,
            name: cli.name,
            prenom: cli.prenom,
            naissance: cli.naissance,
            mail: cli.mail,
            mdp: cli.mdp,
            role: cli.role,
        }));
    }
    async getClients0() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({ id: cli.id,
            name: cli.name,
            prenom: cli.prenom,
            naissance: cli.naissance,
            mail: cli.mail,
            mdp: cli.mdp,
            role: cli.role, }));
    }
    async getClients1() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({ id: cli.id,
            name: cli.name,
            prenom: cli.prenom,
            naissance: cli.naissance,
            mail: cli.mail,
            mdp: cli.mdp,
            role: cli.role, }));
    }
    async getClients2() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({ id: cli.id,
            name: cli.name,
            prenom: cli.prenom,
            naissance: cli.naissance,
            mail: cli.mail,
            mdp: cli.mdp,
            role: cli.role, }));
    }
    async getClients3() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({ id: cli.id,
            name: cli.name,
            prenom: cli.prenom,
            naissance: cli.naissance,
            mail: cli.mail,
            mdp: cli.mdp,
            role: cli.role, }));
    }
    async getSingleClientById(clientId) {
        const client = await this.findClientById(clientId);
        console.log('client', client);
        return { id: client.id,
            name: client.name,
            prenom: client.prenom,
            naissance: client.naissance,
            mail: client.mail,
            mdp: client.mdp,
            role: client.role,
        };
    }
    async findClientById(id) {
        let client;
        try {
            client = await this.clientsModel.findById(id);
            return client;
        }
        catch (error) {
            throw new common_1.NotFoundException('Le client n' + 'a pas été trouvé selon l' + 'id');
        }
    }
    async getSingleClientByMail(clientMail) {
        const client = await this.findClientByMail(clientMail);
        console.log('client', client);
        return client;
    }
    async findClientByMail(clientMail) {
        let client;
        try {
            client = await this.clientsModel.findOne([clientMail]);
            return client;
        }
        catch (error) {
            throw new common_1.NotFoundException('Le client n' + 'a pas été trouvé selon le mail');
        }
    }
    async filterByMail(mail) {
        const clients = await this.clientsModel.find({}).where('mail').equals(mail).lean();
        console.log('client filtré par mail', clients[mail]);
        return clients[mail];
    }
    async filterByName(name) {
        const clients = await this.clientsModel.find({}).where('name').equals(name).lean();
        console.log('client filtré par nom', clients[name]);
        return clients[name];
    }
    async filterByLetters(letters) {
        const clientsL = await this.clientsModel.find({}).where('mail').regex(letters);
        console.log('Voici les clients contenant la lettre', letters, clientsL);
        return clientsL;
    }
    async filterByLetters0(letters) {
        const clientsN = await this.clientsModel.find({}).where('name').regex(letters);
        console.log('Voici les clients contenant la lettre', letters, clientsN);
        return clientsN;
    }
    async insertClient(id, name, prenom, naissance, mail, mdp, role) {
        const newClient = new this.clientsModel({ id, name, prenom, naissance, mail, mdp, role });
        const result = await newClient.save();
        console.log(result);
        return result.id;
    }
    async updateClient(id, name, prenom, naissance, mail, mdp, role) {
        const updateClient = await this.findClientById(id);
        if (id) {
            updateClient.id = id;
        }
        if (name) {
            updateClient.name = name;
        }
        if (prenom) {
            updateClient.prenom = prenom;
        }
        if (naissance) {
            updateClient.naissance = naissance;
        }
        if (mail) {
            updateClient.mail = mail;
        }
        if (mdp) {
            updateClient.mdp = mdp;
        }
        if (role) {
            updateClient.role = role;
        }
        updateClient.save();
    }
};
ClientsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Clients')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map