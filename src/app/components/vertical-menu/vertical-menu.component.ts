import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
menuAdmin:any[] = [
{
  title: 'Home',
  icon:'assets/images/icon-yellow/home.png',
  href: '/home'
},
{
  title: 'Meseros',
  icon:'assets/images/icon-white/waiter.png',
  href: '/waiters-list'
},
{
  title: 'Cocineros',
  icon:'assets/images/icon-white/chef.png',
  href: '/chefs-list'
},
{
  title: 'Inventario',
  icon:'assets/images/icon-white/inventory.png',
  href: '/inventary'
},
{
  title: 'Salir',
  icon:'assets/images/icon-white/logout.png',
  href: '/logout'
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
