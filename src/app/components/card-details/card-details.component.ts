import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  waitersStaff:any[] = [
    {
      photo: 'assets/images/icon-yellow/waiter.png',
      nombres: 'Mey',
      email:'paulina@burguerqueen.com',
      birthday: '24/10/1996',
      cellphone: '958641235'
    },
    {
      photo: 'assets/images/icon-yellow/waiter.png',
      nombres: 'Lore',
      email:'paulina@burguerqueen.com',
      birthday: '24/10/1996',
      cellphone: '958641235'
    },
    {
      photo: 'assets/images/icon-yellow/waiter.png',
      nombres: 'Ross',
      email:'paulina@burguerqueen.com',
      birthday: '24/10/1996',
      cellphone: '958641235'
    },
    {
      photo: 'assets/images/icon-yellow/waiter.png',
      nombres: 'Maya',
      email:'paulina@burguerqueen.com',
      birthday: '24/10/1996',
      cellphone: '958641235'
    },
    {
      photo: 'assets/images/icon-yellow/waiter.png',
      nombres: 'Maria',
      email:'paulina@burguerqueen.com',
      birthday: '24/10/1996',
      cellphone: '958641235'
    },
    {
      photo: 'assets/images/icon-yellow/waiter.png',
      nombres: 'Meche',
      email:'paulina@burguerqueen.com',
      birthday: '24/10/1996',
      cellphone: '958641235'
    }
    ]
  constructor(private route: ActivatedRoute) {
  
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
  }

}
