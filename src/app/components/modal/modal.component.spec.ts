import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { JsonApiService } from 'src/app/services/JsonApiService.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        HttpClientTestingModule, 
        FormsModule,
        ReactiveFormsModule,
      ],
      providers:[JsonApiService],
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ModalComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});