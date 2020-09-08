import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.scss']
})
export class UserLoggedComponent implements OnInit, OnDestroy {

  nombreHijo: string;
  rolHijo: string;
show:boolean=true;
  public currentUser = JSON.parse(localStorage.getItem('usuario'))
  public subj: Subject<any> = new Subject<any>();

  constructor() {
  }

  ngOnInit(): void {


    this.subj.subscribe({
      next: (user) => {

        console.log(user);
        this.nombreHijo = user.email;
        this.rolHijo = (user.role) ? 'admin' : 'staff';
      },
      complete: () => {
        localStorage.clear()
      }
    })
    if (this.currentUser !== null) {
      this.subj.next(this.currentUser);
    }
  }

  ngOnDestroy(): void {
    this.subj.complete()
  }
}
