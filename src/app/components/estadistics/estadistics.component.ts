import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadistics',
  templateUrl: './estadistics.component.html',
  styleUrls: ['./estadistics.component.scss']
})
export class EstadisticsComponent implements OnInit {
//variables locales iniciales
  constructor() { }

  today: number = Date.now();

//indica carga del componente después de que Angular muestre
// por 1era vez las propiedades enlazadas a datos y de entrada
  ngOnInit(): void {
  }

}
