import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { error } from '@angular/compiler/src/util';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonApiService } from 'src/app/services/JsonApiService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private router:Router, private auth: AuthService, private users:JsonApiService) {}
   
   form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  authUser(): void {
    
    
  if(this.form.valid){
    const objUser = {'email':this.form.value.email,'password':this.form.value.password};
    console.log(objUser);
  
    this.auth.postUserLogin(objUser).subscribe((resp: any) => {
      console.log(resp.body);
      
        if (resp.status >= 200) {
          // localStorage.setItem('email',objUser.email);
          // localStorage.setItem('password',objUser.password);
          // localStorage.setItem('token', resp.body.email);
          const authUser = {
            'email':objUser.email,
            'password':objUser.password,
            'token':resp.body.token
          }
          localStorage.setItem('usuario', JSON.stringify(authUser));
          console.log(resp.body);
          this.router.navigate(['/admin']);

          this.users.getUserId(this.form.value.email).subscribe((resp: any) => {
            console.log(resp);
            
          })
        }
        // console.log(resp);
        else{
          console.log(resp.body);
        }
        
      }, error => {
        console.log(error.status);
        this.errorMessage = 'no hay no se proveen `email` o `password` o ninguno de los dos'
      });
    
    
    }else{
      this.form.markAllAsTouched()
    }
  }
}
