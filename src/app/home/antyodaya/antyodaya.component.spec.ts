import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntyodayaComponent } from './antyodaya.component';

describe('AntyodayaComponent', () => {
  let component: AntyodayaComponent;
  let fixture: ComponentFixture<AntyodayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntyodayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntyodayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
