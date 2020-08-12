import { Product } from '../model/products';

export class Order  {
  "id": string;
  "userId": string;
  "client": string;
  "products": [
    {
      "qty": Number;
      "product": Product;
    }
  ];
  "status": string;
  "dateEntry": Date;
}
