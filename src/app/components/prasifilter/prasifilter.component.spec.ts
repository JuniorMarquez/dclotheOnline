import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasifilterComponent } from './prasifilter.component';

describe('PrasifilterComponent', () => {
  let component: PrasifilterComponent;
  let fixture: ComponentFixture<PrasifilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasifilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasifilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
