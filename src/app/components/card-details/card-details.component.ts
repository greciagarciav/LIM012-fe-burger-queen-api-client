import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { JsonApiServiceService } from '../../JsonApiService.service'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  // @Input() id: string;
  // @Input() photo: string;
  // @Input() name: string;
  // @Input() email: string;
  // @Input() dateBirth: string;
  // @Input() cellphone: string;
  @Input() data: any;


  showModal = false;
  toggleModal = () => {
    this.showModal = !this.showModal;
  }
  // //funcion para obtener no admnistrador
  // findEmployer = (employer: any): any => employer.roles.admin === false
  // // varialbe data almacena array de los meseros
  // data: any;

  // constructor(public json: JsonApiServiceService, private route: ActivatedRoute) {
  //   this.json.getJson('http://localhost:3000/users#').subscribe((response: any) => {

  //     this.data = response.filter(this.findEmployer)
  //     console.log(this.data)
  //   })
  // }

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = +this.route.snapshot.paramMap.get('id');
  }

}
