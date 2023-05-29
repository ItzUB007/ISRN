import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlettersComponent } from './newletters.component';

describe('NewlettersComponent', () => {
  let component: NewlettersComponent;
  let fixture: ComponentFixture<NewlettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
