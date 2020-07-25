import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonApiService } from '../../JsonApiService.service'


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

  findEmployer = (employer: User): boolean => employer.roles.admin === false;
 
  receiveUsers() {
    this.json.getUser()
      // .pipe(takeUntil(this.destroy$))
      .subscribe((data: User[]) => { //se le da el tipo de dato que va  a recibir
        this.users = data.filter(this.findEmployer)
        console.log(data)
      },
        err => {
          switch (err.status) {
            case 401:
              this.errorMessage = 'no hay cabecera de autenticación'
              break;
            case 403:
              this.errorMessage = 'no es admin'
              break;
            default:
              this.errorMessage = 'se produjo un error, intente de nuevo'
              break;
          }
        })
  }

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
      // console.log(data.statusText);
      console.log('data', data);
      if(data.status >= 200){
      console.log(data.status);
      this.users.push(data.body);
    }},
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
    this.receiveUsers()
  }

}