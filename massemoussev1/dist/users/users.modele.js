"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    id: { type: String, require: true },
    user: { type: Int32Array, require: true },
    password: { type: String, require: true },
});
//# sourceMappingURL=users.modele.js.map