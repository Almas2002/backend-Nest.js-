import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PizzService } from './pizz.service';
import { Pizza } from './schema/pizza.schema';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Controller('pizz')
export class PizzController {
  constructor(private  readonly pizzaService:PizzService) {
  }
    @Get()
    getAll():Promise<Pizza[]>{
    return this.pizzaService.getAll()
    }
    @Get(':id')
    getOne(@Param('id')id:string):Promise<Pizza>{
      return this.pizzaService.getOne(id)
    }
    @Post()
    create(@Body()createPizzaDto:CreatePizzaDto):Promise<Pizza>{
    return this.pizzaService.create(createPizzaDto)
    }
    @Put(':id')
    update(@Param('id')id:string,@Body()updatePizzaDto:UpdatePizzaDto):Promise<Pizza>{
      return this.pizzaService.update(id,updatePizzaDto)
    }
    @Delete(':id')
    remove(@Param('id')id:string):Promise<Pizza>{
    return this.pizzaService.remove(id)
    }


}
