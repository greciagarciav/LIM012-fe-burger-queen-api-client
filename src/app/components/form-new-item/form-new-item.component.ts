import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent implements OnInit {

  addForm: FormGroup
  invalid: true;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm() // ejecucion con data local
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], //estructura de email
      password: ['', [Validators.required, Validators.maxLength(10)]] //max caracteres
    })
  }

  getEmail() {
    return this.addForm.get('email')
  }

  getPassword() {
    return this.addForm.get('password')
  }

  abort() {
    this.addForm.markAsUntouched();
    // this.addForm.set('password')
    // this.getPassword().value = ""
    // this.getEmail().value=''
  }
  add(event: Event) {
    event.preventDefault();
    if (this.addForm.valid) {
      const value = this.addForm.value;
      console.log(value);
      
    } else {
      this.addForm.markAllAsTouched();
    }
  }

}
