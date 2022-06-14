import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPerformAssetsComponent } from './top-perform-assets.component';

describe('TopPerformAssetsComponent', () => {
  let component: TopPerformAssetsComponent;
  let fixture: ComponentFixture<TopPerformAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPerformAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPerformAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
