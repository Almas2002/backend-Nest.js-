import { Module } from '@nestjs/common';
import { PizzService } from './pizz.service';
import { PizzController } from './pizz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza, pizzaSchema } from './schema/pizza.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Pizza.name,schema:pizzaSchema}])],
  providers: [PizzService],
  controllers:[PizzController]
})
export class PizzModule {}
