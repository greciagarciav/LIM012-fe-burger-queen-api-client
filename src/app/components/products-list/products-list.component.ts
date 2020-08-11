import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[]
  popoverTitle = 'Eliminar';
  popoverMessage = '¿Desea eliminar este producto?';
  showModal = false;
  toggleModal = () => {
    this.showModal = !this.showModal;
  }

@Output () editar = new EventEmitter<object>()

  constructor(private product$: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.product$.getListProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    })
  }
  lessProduct(product) {
    console.log(product);
    this.product$.deleteProduct(product).subscribe()
  }

  editProduct(product: any) {
    console.log(product);
    this.editar.emit(product)
  
  }

}
