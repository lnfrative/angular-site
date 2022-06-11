import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFeatureActionComponent } from './group-feature-action.component';

describe('GroupFeatureActionComponent', () => {
  let component: GroupFeatureActionComponent;
  let fixture: ComponentFixture<GroupFeatureActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFeatureActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFeatureActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
