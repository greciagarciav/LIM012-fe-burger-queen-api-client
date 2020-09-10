import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.scss']
})
export class UserLoggedComponent implements OnInit {

  nombreHijo: string;
  rolHijo: string;
  show: boolean

  public currentUser
  subj:Subscription=null;


  constructor(private auth:AuthService,private router:Router) {
  }


  showUser() {
  return this.auth.user.subscribe((datauser)=>{
    if (datauser !== null) {
    this.currentUser = datauser
    this.nombreHijo=this.currentUser.email
    this.rolHijo = (this.currentUser.role) ? 'admin' : 'staff';
    this.show = true
    }else{

      this.show = false;
    }
  })
  }

  ngOnInit(): void {

    this.auth.refresh$.subscribe(() => {
     this.showUser()

    })
   
    this.subj= this.showUser()

  }

  ngOnDestroy(): void {
if(this.router.url !== ''){
   this.subj.unsubscribe()
}
   
  }
}
