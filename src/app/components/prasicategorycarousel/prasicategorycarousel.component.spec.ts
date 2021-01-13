import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasicategorycarouselComponent } from './prasicategorycarousel.component';

describe('PrasicategorycarouselComponent', () => {
  let component: PrasicategorycarouselComponent;
  let fixture: ComponentFixture<PrasicategorycarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasicategorycarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasicategorycarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
