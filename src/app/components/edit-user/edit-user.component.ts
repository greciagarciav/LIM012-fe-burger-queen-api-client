import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUser implements OnInit {
  datoHijo:string='sinDato'
  
  constructor() { }

  ngOnInit(): void {
  }
funcambiarDatos(e){
     console.log(e)
 this.datoHijo=e
   }
}
