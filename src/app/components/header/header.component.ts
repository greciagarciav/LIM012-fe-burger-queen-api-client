import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean=true;

  constructor() {
    // const currentUser = JSON.parse(localStorage.getItem('usuario'))
    // if (currentUser) {
    //   this.show = true;
    // } else {
    //   this.show = false;
    // }

  }

  ngOnInit(): void {
    const subj = new Subject<number>();
 
    subj.subscribe({
      next: (n) => console.log(n)
    })

    subj.next(4);
 
  }
}
