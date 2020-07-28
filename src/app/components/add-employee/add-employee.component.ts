import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonApiService } from '../../JsonApiService.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployee implements OnInit {
  users: User[];
  emailCtrl = new FormControl('');
  passwordCtrl = new FormControl('');



  constructor(
    private json: JsonApiService,
    public route: ActivatedRoute,
    private router: Router
    ) {  }

  errorMessage: string = 'default';

  addUser(): any {
    console.log(this.emailCtrl.value);
    const newUser: object = {
      "email": this.emailCtrl.value,
      "roles": {
        "admin": false
      },
      "password": this.passwordCtrl.value
    }
    this.json.postUser(newUser).subscribe((data: any) => {
      // console.log('data - add-employee', );
      //  content =
      // this.users.push(data.body)
      // console.log(this.users);
      
    //   if(data.status >= 200){
    //   console.log(data.status);
    // }
    // console.log();
    console.log('data - add-employee', data);
  },
      err => {
        switch (err.status) {
          case 400:
            this.errorMessage = 'no hay no se proveen `email` o `password` o ninguno de los dos'
            break;
          case 401:
            this.errorMessage = 'no hay cabecera de autenticación'
            break;
          case 403:
            this.errorMessage = 'ya existe usuaria con ese `email`'
            break;
          default:
            this.errorMessage = 'se produjo un error, intente de nuevo'
            break;
        }

      })
  }


  ngOnInit(): void {

  }

}