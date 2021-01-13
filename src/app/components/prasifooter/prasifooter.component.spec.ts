import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasifooterComponent } from './prasifooter.component';

describe('PrasifooterComponent', () => {
  let component: PrasifooterComponent;
  let fixture: ComponentFixture<PrasifooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasifooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
