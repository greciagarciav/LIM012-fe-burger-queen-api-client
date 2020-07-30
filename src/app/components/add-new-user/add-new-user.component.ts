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

  constructor(private formBuilder: FormBuilder,private json: JsonApiService) {
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

  data$:Subscription;
@Output() 
addUserMethod:EventEmitter<any> = new EventEmitter();


enviarDatos(user){
  this.addUserMethod.emit(user)
}

  addUser(){
    const value = this.addForm.value;
    const newUser: object = {
    "email": value.email, "roles": { "admin": false }, "password": value.password,
    };
   this.json.postUser(newUser).subscribe((data: any) => {
console.log(data.body);
     this.enviarDatos(data.body)
    // const staff = new StaffList(this.json)
    // staff.users.push(data.body);
    
    
    // staff.receiveUsers()
  })
      
}

}
