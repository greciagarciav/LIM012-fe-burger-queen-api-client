import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonApiServiceService } from '../../JsonApiService.service'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  //funcion para obtener no admnistrador
  findEmployer = (employer: any): any => employer.roles.admin === false
  // varialbe data almacena array de los meseros
  data: any;

  constructor(public json: JsonApiServiceService, private route: ActivatedRoute) {
    this.json.getJson('http://localhost:3000/users#').subscribe((response: any) => {

      this.data = response.filter(this.findEmployer)
      console.log(this.data)
    })
  }
  ngOnInit(): void {

    let id = +this.route.snapshot.paramMap.get('id');
  }

}
