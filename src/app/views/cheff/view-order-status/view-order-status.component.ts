import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order-status',
  templateUrl: './view-order-status.component.html',
  styleUrls: ['./view-order-status.component.scss']
})
export class ViewOrderStatusComponent implements OnInit {
statusPending = 'pending';
statusDelivering = 'delivering';
statusDelivered = 'delivered';

  constructor() { }

  ngOnInit(): void {

  }

}
