import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.scss']
})
export class UserLoggedComponent implements OnInit {

img:string="../assets/images/admin.png";
 @Input() nombreHijo:string='Paulina Sail';
 @Input() rolHijo:string='admin';

  constructor() { }

  ngOnInit(): void {
  }

}
