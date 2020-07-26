import { Component, OnInit, Input } from '@angular/core';
import { JsonApiService } from '../../JsonApiService.service';
import { User } from '../../model/user';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUser implements OnInit {
  @Input() closeCallback = () => (false);
  @Input() email: string;
  @Input() password: string;

  datoHijo:string='sinDato';

  users: User[];

  constructor(private UserService: JsonApiService) { }

  ngOnInit(): void {
  }

funcambiarDatos(e){
     console.log(e)
 this.datoHijo=e
   }
}
