import { Model } from 'mongoose';
import { Clients } from './clients.modele';
export declare class ClientsService {
    private readonly clientsModel;
    private clients;
    constructor(clientsModel: Model<Clients>);
    getClients(): Promise<{
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients1(): Promise<{
        id: string;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients2(): Promise<{
        id: string;
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
    filterByName(name: string): Promise<Clients[]>;
    filterByLetters(letters: string): Promise<Clients[]>;
    insertClient(id: string, name: string, prenom: string, naissance: string, mail: string, mdp: string, role: string): Promise<string>;
    updateClient(id: string, name: string, prenom: string, naissance: string, mail: string, mdp: string, role: string): Promise<void>;
}
