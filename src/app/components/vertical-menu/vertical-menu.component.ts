import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute,NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
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
currentUrl: any;
desactivado:boolean=false;
changeImage(){
    this.desactivado = !this.desactivado

  }

  constructor(public router: Router) { 
   router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(event => {
            this.currentUrl = Object.values(event)[1];
            
            // this.menuAdmin.forEach(i=>{
            //   if(this.currentUrl===i.href){
            //     console.log(i.icon)
            //     i.icon =i.iconSelect;
            //     i.iconSelect= i.icon;
            //     console.log(i.icon)
            // }
          // })
        });  
} ;

  ngOnInit(): void { 
  }

}
