import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCalculatorComponent } from './section-calculator.component';

describe('SectionCalculatorComponent', () => {
  let component: SectionCalculatorComponent;
  let fixture: ComponentFixture<SectionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
