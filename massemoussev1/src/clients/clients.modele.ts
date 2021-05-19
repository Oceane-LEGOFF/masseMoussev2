
import * as mongoose from 'mongoose';

export const ClientsSchema = new mongoose.Schema({ // Schema mapé à une collection MongoDB et définit la forme des documents au sein de la collection

  name: {type: String, require: true},
  prenom: {type: String, require: true},
  naissance: {type: String, require: true},
  mail: {type: String, require: true},
  mdp: {type: String, require: true},
  role: {type: String, require: true}

// {typeKey: '$type'}
},);

export interface Clients extends mongoose.Document {

    name: string,
    prenom: string,
    naissance: string,
    mail: string,
    mdp: string, 
    role: string
}
