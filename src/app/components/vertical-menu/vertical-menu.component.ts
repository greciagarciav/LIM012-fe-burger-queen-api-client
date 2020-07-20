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

  changeImage(){
    // this.menuAdmin[0].icon='assets/images/icon-yellow/waiter.png'
    this.menuAdmin[1].icon='assets/images/icon-yellow/waiter.png'
    // this.menuAdmin[2].icon='assets/images/icon-yellow/chef.png'
    // this.menuAdmin[3].icon='assets/images/icon-yellow/inventary.png'
    // this.menuAdmin[4].icon='assets/images/icon-yellow/logout.png'
    
  }

  ngOnInit(): void {
  }

}
