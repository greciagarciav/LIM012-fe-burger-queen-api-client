import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  @Input() data: any;

  showModal = false;
  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = +this.route.snapshot.paramMap.get('id');
  }

}
