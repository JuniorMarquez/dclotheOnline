import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasiaboutoverlayComponent } from './prasiaboutoverlay.component';

describe('PrasiaboutoverlayComponent', () => {
  let component: PrasiaboutoverlayComponent;
  let fixture: ComponentFixture<PrasiaboutoverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasiaboutoverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasiaboutoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
