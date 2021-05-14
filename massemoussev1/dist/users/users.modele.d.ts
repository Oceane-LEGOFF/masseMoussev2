import * as mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface User extends mongoose.Document {
    id: string;
    user: Int32Array;
    password: string;
}
