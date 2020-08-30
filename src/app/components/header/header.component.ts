import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean;

  constructor() {
    // const currentUser = JSON.parse(localStorage.getItem('usuario'))
    // if (currentUser) {
    //   this.show = true;
    // } else {
    //   this.show = false;
    // }
  }

  ngOnInit(): void {
  }

}
