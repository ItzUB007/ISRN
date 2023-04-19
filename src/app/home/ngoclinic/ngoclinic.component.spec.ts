import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOClinicComponent } from './ngoclinic.component';

describe('NGOClinicComponent', () => {
  let component: NGOClinicComponent;
  let fixture: ComponentFixture<NGOClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOClinicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NGOClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
