import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DclothetopbarComponent } from './dclothetopbar.component';

describe('DclothetopbarComponent', () => {
  let component: DclothetopbarComponent;
  let fixture: ComponentFixture<DclothetopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DclothetopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DclothetopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
