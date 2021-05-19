import { ClientsService } from './clients.service';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    getAllClients(): Promise<{
        id: string;
        name: string;
        prenom: string;
        naissance: string;
        mail: string;
        mdp: string;
        role: string;
    }[]>;
    getClients(clientId: string): Promise<{
        id: any;
        name: any;
        prenom: any;
        naissance: any;
        mail: any;
        mdp: any;
        role: any;
    }>;
    getClients1(name: string): Promise<import("./clients.modele").Clients[]>;
    getClients2(letters: string): Promise<import("./clients.modele").Clients[]>;
    addBeer(cliid: string, cliname: string, cliprenom: string, clinaissance: string, climail: string, climdp: string, clirole: string): Promise<{
        id: string;
    }>;
    updateClient(cliid: string, cliname: string, cliprenom: string, clinaissance: string, climail: string, climdp: string, clirole: string): Promise<any>;
}
