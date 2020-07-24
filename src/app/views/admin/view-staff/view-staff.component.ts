import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '../../../JsonApiService.service'


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  data: any;
  // url: string = 'http://localhost:3000/users#'

  constructor(public json: JsonApiService) {

  }

  ngOnInit(): void {
    // this.json.getEmployed(this.url).subscribe((response: any) => {
    //   this.data = response.filter((employer: any): any => employer.roles.admin === false)
    //   console.log(JSON.stringify(this.data) + 'desde waiters')
    // })
  }

}
