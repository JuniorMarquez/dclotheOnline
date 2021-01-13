import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasisliderComponent } from './prasislider.component';

describe('PrasisliderComponent', () => {
  let component: PrasisliderComponent;
  let fixture: ComponentFixture<PrasisliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasisliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasisliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
