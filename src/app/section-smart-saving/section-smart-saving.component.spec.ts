import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSmartSavingComponent } from './section-smart-saving.component';

describe('SectionSmartSavingComponent', () => {
  let component: SectionSmartSavingComponent;
  let fixture: ComponentFixture<SectionSmartSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSmartSavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSmartSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
