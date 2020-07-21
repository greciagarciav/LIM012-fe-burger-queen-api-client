import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JsonApiService } from '../../JsonApiService.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  //variable que se va a ir al componente padre
  @Output() cambio = new EventEmitter<number>();
  cambiar() {
    this.cambio.emit(5)
  }
  
  // cambiar(){
  //   this.cambio.emit({"dato"})
  // }


  
data: any; // varialbe data almacena array de los meseros
  url: string = 'http://localhost:3000/users#'
  constructor(public json: JsonApiService) {
  }
  newPerson: any = {
    "id": "845",
    "email": "carlos@gmail.com",
    "roles": {
      "admin": false
    },
    "photo": "string.png",
    "name": " Garcia",
    "dateBirth": "04/10/1996",
    "cellphone": "944444444"
  }
  id= "8445"
  findEmployer = (employer: any): any => employer.roles.admin === false//funcion para obtener no admnistrador
  
  addEmployed() {
    this.json.postEmployed(this.url, this.newPerson).subscribe((response: any) => {
      this.data.push(response)
    });
  }

  lessEmployed():void{
      this.json.deleteEmployed('http://localhost:3000/users#', this.id).subscribe((response: any) => {
      console.log( this.id);
      
      }); 
      this.data = this.data.filter(e=>e.id !==this.id)
  }

  ngOnInit(): void {
    this.json.getEmployed(this.url).subscribe((response: any) => {
      this.data = response.filter(this.findEmployer)
      console.log(this.data)
    })
  }


}
