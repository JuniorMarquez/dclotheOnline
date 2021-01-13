import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasidiscountComponent } from './prasidiscount.component';

describe('PrasidiscountComponent', () => {
  let component: PrasidiscountComponent;
  let fixture: ComponentFixture<PrasidiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasidiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasidiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
