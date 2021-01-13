import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasicartoverlayComponent } from './prasicartoverlay.component';

describe('PrasicartoverlayComponent', () => {
  let component: PrasicartoverlayComponent;
  let fixture: ComponentFixture<PrasicartoverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasicartoverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasicartoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
