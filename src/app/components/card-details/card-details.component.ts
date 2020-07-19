import { Component, OnInit } from '@angular/core';
import { JsonApiServiceService } from '../../JsonApiService.service'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  // waitersStaff:any[] = [
  //   {
  //     photo: 'assets/images/icon-yellow/waiter.png',
  //     nombres: 'Mey',
  //     email:'paulina@burguerqueen.com',
  //     birthday: '24/10/1996',
  //     cellphone: '958641235'
  //   },
  //   {
  //     photo: 'assets/images/icon-yellow/waiter.png',
  //     nombres: 'Lore',
  //     email:'paulina@burguerqueen.com',
  //     birthday: '24/10/1996',
  //     cellphone: '958641235'
  //   },
  //   {
  //     photo: 'assets/images/icon-yellow/waiter.png',
  //     nombres: 'Ross',
  //     email:'paulina@burguerqueen.com',
  //     birthday: '24/10/1996',
  //     cellphone: '958641235'
  //   },
  //   {
  //     photo: 'assets/images/icon-yellow/waiter.png',
  //     nombres: 'Maya',
  //     email:'paulina@burguerqueen.com',
  //     birthday: '24/10/1996',
  //     cellphone: '958641235'
  //   },
  //   {
  //     photo: 'assets/images/icon-yellow/waiter.png',
  //     nombres: 'Maria',
  //     email:'paulina@burguerqueen.com',
  //     birthday: '24/10/1996',
  //     cellphone: '958641235'
  //   },
  //   {
  //     photo: 'assets/images/icon-yellow/waiter.png',
  //     nombres: 'Meche',
  //     email:'paulina@burguerqueen.com',
  //     birthday: '24/10/1996',
  //     cellphone: '958641235'
  //   }
  //   ]

  //funcion para obtener no admnistrador
  findEmployer = (employer: any): any => employer.roles.admin === false
  // varialbe data almacena array de los meseros
  data: any;
  
  constructor(public json: JsonApiServiceService) {
    this.json.getJson('http://localhost:3000/users#').subscribe((response: any) => {

      this.data = response.filter(this.findEmployer)
      console.log(this.data)
    })
  }
  ngOnInit(): void {
  }

}
