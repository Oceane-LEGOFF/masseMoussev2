import * as mongoose from 'mongoose';

export const BeerSchema = new mongoose.Schema({ // Schema mapé à une collection MongoDB et définit la forme des documents au sein de la collection
  id: {type: String, require: true},
  obdb_id: {type: String, require: true },
  title: {type: String, require: true },
  name: {type: String, require: true },
  brewery_type: {type: String, require: true}, 
  street: {type: String, requrire: true}, 
  adresse_2: {tyoe: String, require: false},
  adresse_3: {tyoe: String, require: false},
  city: {tyoe: String, require: false},
  state: {tyoe: String, require: false},
  country_province: {tyoe: String, require: false},
  postal_code: {tyoe: String, require: false},
  country: {tyoe: String, require: false},
  longitude: {tyoe: String, require: false},
  latitude: {tyoe: String, require: false},
  phone: {tyoe: String, require: false},
  website_url: {tyoe: String, require: false},
  updated_at: {tyoe: String, require: false},
  created_at: {tyoe: String, require: false}

// {typeKey: '$type'}
},);

export interface Beer extends mongoose.Document {
    id: string,
    obdb_id: string
    title: string
    name: string
    brewery_type: string
    street: string
    adresse_2: string
    adresse_3: string
    city: string
    state: string
    country_province: string
    postal_code: string
    country: string
    longitude: string
    latitude: string
    phone: string
    website_url: string
    updated_at: string
    created_at: string
     

}
