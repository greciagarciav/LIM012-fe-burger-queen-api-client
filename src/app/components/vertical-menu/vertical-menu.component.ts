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
  icon:'assets/images/icon-white/user-icon.png',
  iconSelect:'assets/images/icon-yellow/user-icon.png',
  href: '/staff-list'
},
{
  title: 'Mesero',
  icon:'assets/images/icon-white/waiter.png',
  iconSelect:'assets/images/icon-yellow/waiter.png',
  href: '/inventary'
},
{
  title: 'Jefe de cocina',
  icon:'assets/images/icon-white/chef.png',
  iconSelect:'assets/images/icon-yellow/chef.png',
  href: '/logout'
},
{
  title: 'Salir',
  icon:'assets/images/icon-white/logout.png',
  iconSelect:'assets/images/icon-yellow/user-icon.png',
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

 
 // router.events.subscribe((data:any) => {
    //  if(data.url){
    //  console.log(data.filter(e => e !== undefined)) }
    // console.log(router.location.path());
    // console.log(route.snapshot.params['id'])

    
  

  ngOnInit(): void { 
  }

}
