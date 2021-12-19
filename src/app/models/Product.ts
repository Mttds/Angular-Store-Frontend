export class Product {
  id? : number;
  name: string;
  type: string;
  category: string;
  weight: number;
  description: string;
  url: string;
  price: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.type = '';
    this.category = '';
    this.weight = 0;
    this.description = '';
    this.url = '';
    this.price = 0;
  }
}
  
  