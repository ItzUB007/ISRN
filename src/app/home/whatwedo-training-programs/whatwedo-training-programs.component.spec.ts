import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwedoTrainingProgramsComponent } from './whatwedo-training-programs.component';

describe('WhatwedoTrainingProgramsComponent', () => {
  let component: WhatwedoTrainingProgramsComponent;
  let fixture: ComponentFixture<WhatwedoTrainingProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatwedoTrainingProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatwedoTrainingProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
