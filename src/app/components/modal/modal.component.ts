import { Component, OnInit, Input, Output } from '@angular/core';
import { JsonApiService } from 'src/app/services/JsonApiService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

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
    this.crearForm();
    if (valor) {
      this.contactOriginal = valor;
      this.editForm.patchValue({
        email: valor.email,
        password: '',
      });
    }
  }

  editForm: FormGroup;
  contactOriginal: any;

  constructor(private json: JsonApiService, private fb: FormBuilder){
    this.crearForm();
  }

  ngOnInit() {
  }
  crearForm() {
    this.editForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  onGuardar() {
    const user = {
      "email": this.editForm.value.email,
      "password": this.editForm.value.password,
      "roles": {
        "admin": false
      }
    }
    if(this.editForm.valid){
      this.json.putUser(user, this.contactOriginal.id).subscribe()
    }

  }
}
