import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pizza, pizzaDocument } from './schema/pizza.schema';
import { Model } from 'mongoose';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';


@Injectable()
export class PizzService {
  constructor(@InjectModel(Pizza.name) private pizzaModel: Model<pizzaDocument>) {
  }

  async create(pizzaCreateDto: CreatePizzaDto): Promise<Pizza> {
    const pizza = new this.pizzaModel(pizzaCreateDto);
    return pizza.save();
  }

  async getAll(): Promise<Pizza[]> {
    return this.pizzaModel.find().exec();
  }

  async getOne(id: string): Promise<Pizza> {
    return this.pizzaModel.findById(id);
  }

  async remove(id: string): Promise<Pizza> {
    return this.pizzaModel.findByIdAndRemove(id);
  }

  async update(id: string, updatePizzaDto: UpdatePizzaDto) {
    return this.pizzaModel.findByIdAndUpdate(id, updatePizzaDto);
  }

}
