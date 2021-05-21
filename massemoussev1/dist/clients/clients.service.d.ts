import { Model } from 'mongoose';
import { Clients } from './clients.modele';
export declare type Client = any;
export declare class ClientsService {
    private readonly clientsModel;
    private clients;
    constructor(clientsModel: Model<Clients>);
    getClients(): Promise<{
        id: any;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients0(): Promise<{
        id: any;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients1(): Promise<{
        id: any;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients2(): Promise<{
        id: any;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients3(): Promise<{
        id: any;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getSingleClientById(clientId: string): Promise<{
        id: any;
        name: any;
        prenom: any;
        naissance: any;
        mail: any;
        mdp: any;
        role: any;
    }>;
    private findClientById;
    getSingleClientByMail(clientMail: string): Promise<Clients[]>;
    private findClientByMail;
    filterByMail(mail: string): Promise<Clients[]>;
    filterByName(name: string): Promise<Clients[]>;
    filterByLetters(letters: string): Promise<Clients[]>;
    filterByLetters0(letters: string): Promise<Clients[]>;
    insertClient(id: string, name: string, prenom: string, naissance: string, mail: string, mdp: string, role: string): Promise<Clients>;
    updateClient(id: string, name: string, prenom: string, naissance: string, mail: string, mdp: string, role: string): Promise<void>;
    findOne(mail: string): Promise<Client | undefined>;
}
