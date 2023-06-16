import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPIPVComponent } from './fp-ipv.component';

describe('FPIPVComponent', () => {
  let component: FPIPVComponent;
  let fixture: ComponentFixture<FPIPVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPIPVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FPIPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
