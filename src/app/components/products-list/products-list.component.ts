import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[]

  constructor(private product$:ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.product$.getListProducts().subscribe((data)=>{
      console.log(data);
     this.products=  data;
    })
  }
  deleteProduct(product) {
    this.product$.deleteProduct(product._id).subscribe((response: any) => {
      this.products = this.products.filter(e => e._id !== product)
      console.log(response.status);
    })
    console.log(product);
  }

  addProduct(){
    const newUser: object = {
      "_id": '141',
    "name": 'string',
    "price": 1,
    "image": 'string',
    "type":'k',
    "dateEntry": 'Date',
    };
    this.product$.postProduct(newUser).subscribe((data: any) => {
      console.log(data);

    })
  }

}
