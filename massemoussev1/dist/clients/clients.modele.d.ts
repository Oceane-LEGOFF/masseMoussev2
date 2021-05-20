import * as mongoose from 'mongoose';
export declare const ClientsSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface Clients extends mongoose.Document {
    name: string;
    prenom: string;
    naissance: string;
    mail: string;
    mdp: string;
    role: string;
}
