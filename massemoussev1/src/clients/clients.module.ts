import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './clients.controller';
import { ClientsSchema } from './clients.modele';
import { ClientsService } from './clients.service';

@Module({

    imports: [
        MongooseModule.forFeature([{name: 'Clients', schema: ClientsSchema}])
    ],

    controllers: [
        ClientsController
    ],

    providers: [
        ClientsService
    ]
})

export class ClientsModule {}
