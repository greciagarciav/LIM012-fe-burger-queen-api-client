import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonApiService } from 'src/app/JsonApiService.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { StaffList } from "../staff-list/staff-list.component";

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  addForm: FormGroup
  errorMessage: string = 'default'

  constructor(private formBuilder: FormBuilder, private json: JsonApiService) {
    this.buildForm()

  }

  ngOnInit(): void {

  }
  buildForm() {
    this.addForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  getEmail() {
    return this.addForm.get('email')
  }

  getPassword() {
    return this.addForm.get('password')
  }


  //agregar nuevo usuario
  addUser() {
    if (this.addForm.valid) {
      const value = this.addForm.value;
      console.log(value);
      const newUser: object = {
        "email": value.email, "roles": { "admin": false }, "password": value.password,
      };
      this.json.postUser(newUser).subscribe((data: any) => {
        console.log(data.body);
        console.log(data.status);
        this.addForm.reset()
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
    } else {
      this.addForm.markAllAsTouched();
    }
  }



}
