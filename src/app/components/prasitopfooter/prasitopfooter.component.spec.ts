import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasitopfooterComponent } from './prasitopfooter.component';

describe('PrasitopfooterComponent', () => {
  let component: PrasitopfooterComponent;
  let fixture: ComponentFixture<PrasitopfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasitopfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasitopfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
