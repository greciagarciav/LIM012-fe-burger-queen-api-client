import { Component, OnInit } from '@angular/core';
import { JsonApiService} from '../../../JsonApiService.service'


@Component({
  selector: 'app-view-waiters',
  templateUrl: './view-waiters.component.html',
  styleUrls: ['./view-waiters.component.scss']
})
export class ViewWaitersComponent implements OnInit {

    // //funcion para obtener no admnistrador
    // findEmployer = (employer: any): any => employer.roles.admin === false
    // // varialbe data almacena array de los meseros
    // data: any;

    // constructor(public json: JsonApiService) {
    //   this.json.getEmployed('http://localhost:3000/users#').subscribe((response: any) => {

    //     this.data = response.filter(this.findEmployer)
    //     console.log(this.data + 'desde waiters')
    //   })
    // }

  ngOnInit(): void {
  }

}
