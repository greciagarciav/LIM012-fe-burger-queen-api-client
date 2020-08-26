import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-states',
  templateUrl: './view-states.component.html',
  styleUrls: ['./view-states.component.scss']
})
export class ViewStatesComponent implements OnInit {

  statusPending = 'pending';
  statusDelivering = 'delivering';
  statusDelivered = 'delivered';
  constructor() { }

  ngOnInit(): void {
  }

}
