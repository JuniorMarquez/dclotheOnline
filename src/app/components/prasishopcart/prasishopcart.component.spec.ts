import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasishopcartComponent } from './prasishopcart.component';

describe('PrasishopcartComponent', () => {
  let component: PrasishopcartComponent;
  let fixture: ComponentFixture<PrasishopcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasishopcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasishopcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
