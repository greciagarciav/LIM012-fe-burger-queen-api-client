import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.scss']
})
export class UserLoggedComponent implements OnInit {

nombreHijo:string='Paulina Sail';
rolHijo:string='admin';

currentUser:any;




  constructor() { 
  this.currentUser=JSON.parse(localStorage.getItem('usuario'))
  console.log(this.currentUser);
    this.nombreHijo= this.currentUser.email;
    this.rolHijo=(this.currentUser.role)?'admin':'staff';
    }

  ngOnInit(): void {
    
  }

}
