import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasiproductdetailComponent } from './prasiproductdetail.component';

describe('PrasiproductdetailComponent', () => {
  let component: PrasiproductdetailComponent;
  let fixture: ComponentFixture<PrasiproductdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasiproductdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasiproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
