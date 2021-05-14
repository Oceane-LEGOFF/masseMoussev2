import * as mongoose from 'mongoose';
export declare const BeerSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface Beer extends mongoose.Document {
    id: string;
    obdb_id: string;
    title: string;
    name: string;
    brewery_type: string;
    street: string;
    adresse_2: string;
    adresse_3: string;
    city: string;
    state: string;
    country_province: string;
    postal_code: string;
    country: string;
    longitude: string;
    latitude: string;
    phone: string;
    website_url: string;
    updated_at: string;
    created_at: string;
}
