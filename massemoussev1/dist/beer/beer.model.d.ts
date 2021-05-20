import * as mongoose from 'mongoose';
export declare const BeerSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface Beer extends mongoose.Document {
    name: string;
    city: string;
    state: string;
    price: string;
    photo: string;
}
