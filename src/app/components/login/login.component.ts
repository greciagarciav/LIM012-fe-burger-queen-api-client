import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { error } from '@angular/compiler/src/util';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonApiService } from 'src/app/services/JsonApiService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit,OnDestroy {
  errorMessage: string=null;
  // token:string;
  tok:string;
  // err: ;
   auth: Subscription = null;
  constructor(private router:Router, private auth$: AuthService, private users:JsonApiService) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {

  }
  getEmail() {
    return this.form.get('email')
  }

  getPassword() {
    return this.form.get('password')
  }

  authUser(): void {
    const mail = this.form.value.email;
    // const objUser = this.form.value;

    if (this.form.valid) {
    this.auth = this.auth$.getToken(this.form.value).subscribe((resp) => {
        if (resp.status >= 200) {
          this.tok = resp.body.token;

            this.auth$.getUser(mail, this.tok).subscribe((resp) => {
              const role = resp.roles.admin;
              const authUser = {
                'token': this.tok,
                'email': resp.email,
                'role': role,
                'id': resp._id
                };
              localStorage.setItem('usuario', JSON.stringify(authUser));
              if (resp != undefined) {
                role ? this.router.navigate(['/admin']) : this.router.navigate(['/mesero']);
              } else {
                localStorage.removeItem('usuario');
                this.errorMessage= 'este usuario no existe';
              }
            });
        }
      }, err => {
        if(err.status === 403) {
          return this.errorMessage = 'La contraseña es incorrecta';
        }
        console.log('3',err)
        return this.errorMessage = 'Este usuario no existe';
      });

      // this.auth = this.auth$.postUserLogin(mail).subscribe((resp: any) => {
      //   if (resp.status >= 200) {
      //     this.token = resp.body.token

      //     this.users.getUserId(this.form.value.email).subscribe((resp: any) => {
      //       if (resp.length > 0) {
      //         const role = resp[0].roles.admin;
      //         const emailAuth = resp[0].email;
      //         const passAuth = resp[0].password;

      //         const authUser = {
      //           'email': emailAuth,
      //           'password': passAuth,
      //           'role': role,
      //           'token': this.token,
      //         }

      //         localStorage.setItem('usuario', JSON.stringify(authUser));
      //         role ? this.router.navigate(['/admin']) : this.router.navigate(['/mesero'])

      //       }else{
      //         localStorage.removeItem('usuario');
      //         this.errorMessage= 'este usuario no existe intente de nuevo'
      //       }

      //     })
      //   }
      //   else {
      //     this.errorMessage = 'ocurrio un error intente de nuevo'
      //   }

      // },
      //  error => {
      //   this.errorMessage = 'no hay no se proveen `email` o `password` o ninguno de los dos'
      // });

    }else{

      this.form.markAllAsTouched()
    }
  }



  ngOnDestroy(): void {
    this.auth.unsubscribe();
  }

}
