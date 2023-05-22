import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDirectoryComponent } from './members-directory.component';

describe('MembersDirectoryComponent', () => {
  let component: MembersDirectoryComponent;
  let fixture: ComponentFixture<MembersDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
