import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasiproductcatalogComponent } from './prasiproductcatalog.component';

describe('PrasiproductcatalogComponent', () => {
  let component: PrasiproductcatalogComponent;
  let fixture: ComponentFixture<PrasiproductcatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasiproductcatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasiproductcatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
