import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonApiService } from '../../JsonApiService.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUser implements OnInit, OnChanges {
  @Input() closeCallback = () => (false);
  @Input() email: string;
  @Input() password: string;

  datoHijo:string='sinDato';

  users: User[];

  constructor(private json: JsonApiService) { 
    console.log("Constructor edit-user");
    console.log("Constructor User",json.userFormData);
  }

  emailCtrl = new FormControl('');
  passwordCtrl = new FormControl('');


  editUser(): any {
    const user: object = {
      "email": this.emailCtrl.value,
      "password": this.passwordCtrl.value,
      "roles": {
        "admin": false
      }
    }
    const userId = "VoNxx-g";

    this.json.putUser(user, userId).subscribe((data: any) => {
      console.log('data - edit-employee', data);
      if(data.status >= 200){
      console.log(data.status);
    }
  })
}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('onchanges', this.email);
    console.log('onchanges', this.password);
  }

funcambiarDatos(e){
     console.log(e)
 this.datoHijo=e
   }
}
