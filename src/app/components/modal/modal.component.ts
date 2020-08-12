import { Component, OnInit, Input, Output } from '@angular/core';
import { JsonApiService } from 'src/app/services/JsonApiService.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => (false);

  @Input() set contacto(valor) {
    this.crearForm()
    if (valor) {
      this.contactOriginal = valor
      this.form.patchValue({
        email: valor.email,
        constraseña: '',
      })
      console.log(valor);

    }
  }

  form: FormGroup
  contactOriginal: any

  constructor(private json: JsonApiService, private fb: FormBuilder){}

  ngOnInit() {
  }
  crearForm() {
    this.form = this.fb.group({
      email: '',
      constraseña: '',
    })
  }
  onGuardar() {
    console.log(this.contactOriginal, this.form.value);
    const user = {
      "email": this.form.value.email,
      "password": this.form.value.constraseña,
      "roles": {
        "admin": false
      }
    }
    if(this.form.valid){
      this.json.putUser(user, this.contactOriginal.id).subscribe((data: any) => {
      console.log('data - edit-employee', data);
    })
    }
    
  }
  closeEdition() {

  }

}
