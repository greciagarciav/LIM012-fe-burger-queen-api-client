import { Component } from '@angular/core';
// imports y exports de cada componente es como un index de componentes
@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// define la funcionalidad del componente
export class AppComponent {
  title = 'BQ API';
}
