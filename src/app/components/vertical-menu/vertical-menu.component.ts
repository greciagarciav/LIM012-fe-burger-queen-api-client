import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
menuAdmin:any[] = [{
  title: 'Home',
  icon:'assets/images/icon-yellow/home.png',
  href: '/home'
},{
  title: 'Meseros',
  icon:'assets/images/icon-white/image (8).png',
  href: '/second-component'
},{
  title: 'Cocineros',
  icon:'assets/images/icon-white/image (8).png',
  href: 'admin/chefs-list'
},{
  title: 'Menu',
  icon:'assets/images/icon-white/image (9).png',
  href: '/second-component'
},{
  title: 'Inventario',
  icon:'assets/images/icon-white/image (8).png',
  href: '/second-component'
},{
  title: 'Salir',
  icon:'assets/images/icon-white/image (10).png',
  href: '/second-component'
}]

  constructor() { }

  ngOnInit(): void {
  }

}
