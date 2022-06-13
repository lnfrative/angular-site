import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCalculatorComponent } from './income-calculator.component';

describe('IncomeCalculatorComponent', () => {
  let component: IncomeCalculatorComponent;
  let fixture: ComponentFixture<IncomeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
