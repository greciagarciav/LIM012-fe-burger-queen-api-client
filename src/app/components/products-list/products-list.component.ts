import { Component, OnInit, Output, EventEmitter, TemplateRef, ViewChild, OnChanges } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { OrdersService } from '../../services/orders/orders.service';
import { Product } from 'src/app/model/products';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  @Output() editar = new EventEmitter<object>()

  products: Product[]
  popoverTitle = 'Eliminar';
  popoverMessage = '¿Desea eliminar este producto?';
  showModal = false;
  showAddButton: boolean = false;
  filterProd: string = 'breakfast'
  show: string;
  path: any;
  buttons: boolean = null;
  public productOrder: object;
  productsSuscription: Subscription=null;

  constructor(private product$: ProductsService, private order$: OrdersService, private route: ActivatedRoute, private router: Router) {
    this.path = route.snapshot.routeConfig.path;
    this.buttons = (this.path === 'inventario') ? true : false
  }

  ngOnInit(): void {
    this.productsSuscription =this.product$.refresh$.subscribe(() => {
      this.getProducts()
    })
   this.getProducts();
    this.showAddButton = this.router.url == '/mesero/orders';
  }

  buttonAdd(product: any) {
    this.productOrder = product;
    this.sendObjProd(this.productOrder);
    this.order$.buttonAddClickEventTrack.next(event);
  }

  sendObjProd (product: object) {
    this.order$.setObjectOrderProduct(product);
  }

  getProducts() {
    this.product$.getListProducts().subscribe((data) => {
      this.products = data;
    })
  }
  lessProduct(product) {
    this.product$.deleteProduct(product).subscribe(dat => {
      this.products = this.products.filter(prod => prod._id != product.id)
    })
  }

  editProduct(product: any) {
    this.editar.emit(product)
  }


  filterType(type: string) {
    switch (type) {
      case 'breakfast':
        this.show = '';
        this.filterProd = type
        break;
      case 'lunch':
        this.show = "lunch"
        this.filterProd = 'hamburguer';
        break;
      default:
        this.show = "lunch";
        this.filterProd = type
        break;
    }
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
    this.productsSuscription.unsubscribe();
  }

}
