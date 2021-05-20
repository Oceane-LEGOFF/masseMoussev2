"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerSchema = void 0;
const mongoose = require("mongoose");
exports.BeerSchema = new mongoose.Schema({
    name: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    price: { type: String, require: true },
});
//# sourceMappingURL=beer.model.js.map