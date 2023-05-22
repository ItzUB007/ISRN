import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIRTEComponent } from './mirte.component';

describe('MIRTEComponent', () => {
  let component: MIRTEComponent;
  let fixture: ComponentFixture<MIRTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MIRTEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MIRTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
