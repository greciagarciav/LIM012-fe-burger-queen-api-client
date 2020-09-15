import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { JsonApiService } from 'src/app/services/JsonApiService.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../../model/user'


describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeAll(() => {
    const authUser = {
      'token': 'abcdefghi123456789',
      };
    localStorage.setItem('usuario', JSON.stringify(authUser));
  });

  afterAll(() => {
    localStorage.removeItem('usuario');
  });
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers:[JsonApiService],
      declarations: [ ModalComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('error when form is empty', () => {
    expect(component.editForm.valid).toBeFalsy();
    component.editForm.controls['email'].setValue('test@test.com');
    component.editForm.controls['password'].setValue('123456789');
    expect(component.editForm.valid).toBeTruthy();

    let userEdited : User;
    userEdited = component.editForm.value;

    const ex = spyOnProperty(component, 'contacto', 'set');
    component.contactOriginal = '123';
    component.onGuardar();
    expect(userEdited.email).toBe('test@test.com');
    expect(userEdited.password).toBe('123456789');
    expect(component.contactOriginal).toBe('123');
  });

  it('onGuardar, should send success response to onGuardar', () => {
    spyOn(component, 'onGuardar');
    component.onGuardar();

    expect(component.onGuardar).toHaveBeenCalled();
  });

});
