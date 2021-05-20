import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Clients} from './clients.modele'

@Injectable()
export class ClientsService {
    private clients : Clients[] = [];

    constructor (@InjectModel ('Clients') private readonly clientsModel : Model <Clients>) {}

    async getClients() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({id: cli.id,
            name: cli.name, 
            prenom: cli.prenom,
            naissance:cli.naissance, 
            mail: cli.mail, 
            mdp: cli.mdp,
            role: cli.role, 
          }))
    }

    async getClients0() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({id: cli.id, 
            name: cli.name, 
            prenom: cli.prenom,
            naissance:cli.naissance, 
            mail: cli.mail, 
            mdp: cli.mdp,
            role: cli.role, }))
    }

    async getClients1() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({id: cli.id, 
            name: cli.name, 
            prenom: cli.prenom,
            naissance:cli.naissance, 
            mail: cli.mail, 
            mdp: cli.mdp,
            role: cli.role, }))
    }

    async getClients2() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({id: cli.id, 
            name: cli.name, 
            prenom: cli.prenom,
            naissance:cli.naissance, 
            mail: cli.mail, 
            mdp: cli.mdp,
            role: cli.role, }))
    }

    async getClients3() {
        const clients = await this.clientsModel.find().exec();
        return clients.map((cli) => ({id: cli.id, 
            name: cli.name, 
            prenom: cli.prenom,
            naissance:cli.naissance, 
            mail: cli.mail, 
            mdp: cli.mdp,
            role: cli.role, }))
    }

    async getSingleClientById(clientId: string): Promise<{ id: any; name: any; prenom: any; naissance: any; mail: any; mdp: any; role: any; }>{
        const client = await this.findClientById(clientId);
        console.log('client', client);
        return {id: client.id,
            name: client.name,
            prenom: client.prenom, 
            naissance: client.naissance, 
            mail:client.mail, 
            mdp: client.mdp, 
            role: client.role, 
            } 
    }

    private async findClientById (id: string): Promise <Clients>{
        let client
        try{
            client = await this.clientsModel.findById(id);
            return client;
        }catch(error){
            throw new NotFoundException ('Le client n'+'a pas été trouvé selon l'+'id')
        }

    }

    async getSingleClientByMail(clientMail: string): Promise<Clients[]>{ //{ id: any; name: any; prenom: any; naissance: any; mail: any; mdp: any; role: any; }
        const client = await this.findClientByMail(clientMail);
        console.log('client', client);
        return client
    }

    private async findClientByMail (clientMail:string): Promise <Clients[]>{
        let client
        try{
            client = await this.clientsModel.findOne([clientMail]);
            return client;
        }catch(error){
            throw new NotFoundException ('Le client n'+'a pas été trouvé selon le mail')
        }

    }

    async filterByMail(mail: string): Promise <Clients[]> {
        const clients = await this.clientsModel.find({}).where('mail').equals(mail). lean();
        console.log('client filtré par mail', clients[mail]);
        return clients[mail];
    }
    
    async filterByName(name: string): Promise <Clients[]> {
        const clients = await this.clientsModel.find({}).where('name').equals(name). lean();
        console.log('client filtré par nom', clients[name]);
        return clients[name];
    }


    async filterByLetters(letters: string): Promise <Clients[]> {
        const clientsL = await this.clientsModel.find({}).where('mail').regex(letters);
        console.log('Voici les clients contenant la lettre', letters, clientsL);
        return clientsL; 
    }

    async filterByLetters0(letters: string): Promise <Clients[]> {
        const clientsN = await this.clientsModel.find({}).where('name').regex(letters);
        console.log('Voici les clients contenant la lettre', letters, clientsN);
        return clientsN; 
    }

    async insertClient (
    id: string,
    name: string,
    prenom: string,
    naissance: string,
    mail: string,
    mdp: string,
    role: string,)
   
    {

        const newClient = new this.clientsModel({id, name, prenom, naissance, mail, mdp, role});
        const result = await newClient.save();
        console.log(result);
        return result.id as string;
    }

    async updateClient ( id: string,
        name: string,
        prenom: string,
        naissance: string,
        mail: string,
        mdp: string,
        role: string,)

        {
        const updateClient = await this.findClientById(id);
        
        if(id){
            updateClient.id = id;
        }if(name){
            updateClient.name = name;
        }if(prenom){
            updateClient.prenom = prenom;
        }if(naissance){
            updateClient.naissance = naissance;
        }if(mail){
            updateClient.mail = mail;
        }if(mdp){
            updateClient.mdp = mdp;
        }if(role){
            updateClient.role = role;
        }
        updateClient.save();
            
    }

}
