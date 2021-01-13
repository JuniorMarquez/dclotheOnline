import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasiaboutComponent } from './prasiabout.component';

describe('PrasiaboutComponent', () => {
  let component: PrasiaboutComponent;
  let fixture: ComponentFixture<PrasiaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasiaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasiaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
