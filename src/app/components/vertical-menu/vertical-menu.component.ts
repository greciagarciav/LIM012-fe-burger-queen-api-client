import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
menuAdmin:any[] = [{
  title: 'Home',
  icon:'assets/images/home.png',
  href: '/home'
},{
  title: 'Meseros',
  icon:'assets/images/meal.png',
  href: '/second-component'
}]

  constructor() { }

  ngOnInit(): void {
  }

}
