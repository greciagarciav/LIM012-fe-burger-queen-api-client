import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit,OnDestroy {
  errorMessage: string=null;
  tok:string;
   auth: Subscription = null;
  constructor(private router:Router, private auth$: AuthService) {}

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

    }else{

      this.form.markAllAsTouched()
    }
  }

  ngOnDestroy(): void {
    this.auth.unsubscribe();
  }

}
