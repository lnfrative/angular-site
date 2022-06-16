import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBuyCryptoComponent } from './section-buy-crypto.component';

describe('SectionBuyCryptoComponent', () => {
  let component: SectionBuyCryptoComponent;
  let fixture: ComponentFixture<SectionBuyCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBuyCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBuyCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
