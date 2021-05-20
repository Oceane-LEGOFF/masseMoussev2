import * as mongoose from 'mongoose';

export const BeerSchema = new mongoose.Schema({ // Schema mapé à une collection MongoDB et définit la forme des documents au sein de la collection

  name: {type: String, require: true},
  city: {type: String, require: true},
  state: {type: String, require: true},
  price: {type: String, require: true},

  
// {typeKey: '$type'}
},);

export interface Beer extends mongoose.Document {

    name: string,
    city: string,
    state: string,
    price: string
    
  
}
