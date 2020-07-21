import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
menuAdmin:any[] = [
{
  title: 'Admin',
  icon:'fas fa-user-cog',
  href: '/admin/staff'
},
{
  title: 'Mesero',
  icon:'fas fa-user-tie',
  href: '/mesero'
},
{
  title: 'Jefe de cocina',
  icon:'fas fa-bread-slice',
  href: '/cocinero'
},
{
  title: 'Salir',
  icon:'fa fa-sign-out',
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
