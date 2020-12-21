export class UpdatePizzaDto {
  imageUrl:string;
  name:string;
  types:Array<number>;
  sizes:Array<number>;
  price:number;
  category:number;
  rating:number
}