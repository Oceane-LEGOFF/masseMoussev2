import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeerController } from './beer.controller';
import { BeerSchema } from './beer.model';
import { BeerService } from './beer.service';

@Module({

    imports: [
        MongooseModule.forFeature([{name: 'Beer', schema: BeerSchema}])
    ],

    controllers: [
        BeerController
    ],

    providers: [
        BeerService
    ]
})

export class BeerModule {}
