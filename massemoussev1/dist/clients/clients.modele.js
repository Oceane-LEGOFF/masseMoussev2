"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsSchema = void 0;
const mongoose = require("mongoose");
exports.ClientsSchema = new mongoose.Schema({
    name: { type: String, require: true },
    prenom: { type: String, require: true },
    naissance: { type: String, require: true },
    mail: { type: String, require: true },
    mdp: { type: String, require: true },
    role: { type: String, require: true }
});
//# sourceMappingURL=clients.modele.js.map