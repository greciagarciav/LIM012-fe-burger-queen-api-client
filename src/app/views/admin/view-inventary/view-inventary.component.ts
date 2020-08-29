import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-inventary',
  templateUrl: './view-inventary.component.html',
  styleUrls: ['./view-inventary.component.scss']
})
export class ViewInventaryComponent implements OnInit {

  form: FormGroup;
  confirmation: boolean = false;
  editProp: boolean = false;
  prod = null
  prodEditar = null
  productId: string = null
  productImg: string = null

  constructor(private product$: ProductsService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl('', []),
      type: new FormControl('', [Validators.required]),
      dateEntry: new FormControl('', [Validators.required]),
    })
  }

  addProduct() {
    if (this.form.valid) {
      const newUser: object = {
        "name": this.form.value.name,
        "price": this.form.value.price,
        "image": "assets/images/BQ.png",
        "type": this.form.value.type,
        "dateEntry": this.form.value.dateEntry,
      };
      this.product$.postProduct(newUser).subscribe((data: any) => {
        this.form.reset();
        this.confirmation = false
      })
    } else {
      this.confirmation = true
    };
  }

  editProduct(product: any) {
    this.editProp = true
    this.productId = product.id;
    this.productImg = product.image
    this.form.patchValue({
      name: product.name,
      price: product.price,
    })
  }

  saveEdition() {
    if (this.productId !== null) {
      const newProduct = {
        "name": this.form.value.name,
        "price": this.form.value.price,
        "image": this.productImg,
        "type": this.form.value.type,
        "dateEntry": this.form.value.dateEntry,
      }

      if (this.form.valid) {
        this.product$.updateProduct(newProduct, this.productId).subscribe((dat) => {
          this.editProp = false;
          this.form.reset();
          this.confirmation = false;
        })
      } else {
        this.confirmation = true
      }
    }
  }
}
