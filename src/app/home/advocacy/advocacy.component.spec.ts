import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocacyComponent } from './advocacy.component';

describe('AdvocacyComponent', () => {
  let component: AdvocacyComponent;
  let fixture: ComponentFixture<AdvocacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvocacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvocacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
