"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerSchema = void 0;
const mongoose = require("mongoose");
exports.BeerSchema = new mongoose.Schema({
    id: { type: String, require: true },
    obdb_id: { type: String, require: true },
    title: { type: String, require: true },
    name: { type: String, require: true },
    brewery_type: { type: String, require: true },
    street: { type: String, requrire: true },
    adresse_2: { tyoe: String, require: false },
    adresse_3: { tyoe: String, require: false },
    city: { tyoe: String, require: false },
    state: { tyoe: String, require: false },
    country_province: { tyoe: String, require: false },
    postal_code: { tyoe: String, require: false },
    country: { tyoe: String, require: false },
    longitude: { tyoe: String, require: false },
    latitude: { tyoe: String, require: false },
    phone: { tyoe: String, require: false },
    website_url: { tyoe: String, require: false },
    updated_at: { tyoe: String, require: false },
    created_at: { tyoe: String, require: false }
});
//# sourceMappingURL=beer.model.js.map