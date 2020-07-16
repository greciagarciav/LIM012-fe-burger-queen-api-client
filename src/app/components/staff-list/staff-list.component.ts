import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
nombre:string='Miriam'
rol:string='mesero'
@Input() listElement:string='Staff';
  constructor() { }

  ngOnInit(): void {
  }

}
