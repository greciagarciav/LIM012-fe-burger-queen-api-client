import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StaffList } from './staff-list.component';
import { JsonApiService } from '../../services/JsonApiService.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('StaffList component', () => {
  let component: StaffList;
  let fixture: ComponentFixture<StaffList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffList ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [JsonApiService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
