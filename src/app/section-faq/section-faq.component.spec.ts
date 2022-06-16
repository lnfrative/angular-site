import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFAQComponent } from './section-faq.component';

describe('SectionFAQComponent', () => {
  let component: SectionFAQComponent;
  let fixture: ComponentFixture<SectionFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFAQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
