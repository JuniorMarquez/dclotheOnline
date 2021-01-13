import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasisearchoverlayComponent } from './prasisearchoverlay.component';

describe('PrasisearchoverlayComponent', () => {
  let component: PrasisearchoverlayComponent;
  let fixture: ComponentFixture<PrasisearchoverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasisearchoverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasisearchoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
