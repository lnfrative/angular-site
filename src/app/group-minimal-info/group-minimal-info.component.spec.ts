import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMinimalInfoComponent } from './group-minimal-info.component';

describe('GroupMinimalInfoComponent', () => {
  let component: GroupMinimalInfoComponent;
  let fixture: ComponentFixture<GroupMinimalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupMinimalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMinimalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
