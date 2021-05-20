import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeerModule } from './beer/beer.module';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import "reflect-metadata";
// import { RolesGuard } from '../src/';
import { APP_GUARD } from '@nestjs/core';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';


@Module({
  imports: [
    BeerModule, 
    ClientsModule,
    MongooseModule.forRoot("mongodb+srv://Gauthier:Car3dinal@cluster0.9a3kd.mongodb.net/massemousse"),
    AuthModule,

  ],

  controllers: [
    AppController, 



  ],

  providers: [
    AppService, 

    // {
    //   provide:APP_GUARD,
    // useClass: RolesGuard
    // }

  ],
})
export class AppModule {}
