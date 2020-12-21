import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
export type pizzaDocument = Pizza & Document
@Schema()
export class Pizza {
  @Prop()
  imageUrl:string;
  @Prop()
  name:string;
  @Prop()
  types:Array<number>;
  @Prop()
  sizes:Array<number>;
  @Prop()
  price:number;
  @Prop()
  category:number;
  @Prop()
  rating:number
}
export const pizzaSchema =SchemaFactory.createForClass(Pizza);