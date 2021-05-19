"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const beer_module_1 = require("./beer/beer.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const mongoose_1 = require("@nestjs/mongoose");
require("reflect-metadata");
const roles_guards_1 = require("./role/roles.guards");
const core_1 = require("@nestjs/core");
const clients_module_1 = require("./clients/clients.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            beer_module_1.BeerModule,
            clients_module_1.ClientsModule,
            mongoose_1.MongooseModule.forRoot("mongodb+srv://Gauthier:Car3dinal@cluster0.9a3kd.mongodb.net/massemousse?retryWrites=true&w=majority"),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guards_1.RolesGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map