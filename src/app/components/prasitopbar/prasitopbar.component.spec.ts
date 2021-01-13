import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasitopbarComponent } from './prasitopbar.component';

describe('PrasitopbarComponent', () => {
  let component: PrasitopbarComponent;
  let fixture: ComponentFixture<PrasitopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasitopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasitopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
