import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-inventary',
  templateUrl: './view-inventary.component.html',
  styleUrls: ['./view-inventary.component.scss']
})
export class ViewInventaryComponent implements OnInit {

  products: any[] = [
    {
      "img": "../../../assets/images/cafeAm.png",
      "nombre": "Café americano",
      "precio": "S/.5"
    },
    {
      "img": "../../../assets/images/cafeLec.png",
      "nombre": "Café con leche",
      "precio": "S/.7"
    },
    {
      "img": "../../../assets/images/hamburguesa.png",
      "nombre": "Sandwich de jamón y queso",
      "precio": "S/.10"
    },
    {
      "img": "../../../assets/images/jugoFrutas.png",
      "nombre": "Jugo de frutas natural",
      "precio": "S/.7"
    },
    {
      "img": "../../../assets/images/jugoFrutas.png",
      "nombre": "Jugo de frutas natural",
      "precio": "S/.7"
    },
    {
      "img": "../../../assets/images/jugoFrutas.png",
      "nombre": "Jugo de frutas natural",
      "precio": "S/.7"
    },
    {
      "img": "../../../assets/images/jugoFrutas.png",
      "nombre": "Jugo de frutas natural",
      "precio": "S/.7"
    },
    {
      "img": "../../../assets/images/jugoFrutas.png",
      "nombre": "Jugo de frutas natural",
      "precio": "S/.7"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
