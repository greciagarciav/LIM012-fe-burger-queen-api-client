import { Component, OnInit } from '@angular/core';
import { JsonApiService } from '../../../JsonApiService.service'
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
