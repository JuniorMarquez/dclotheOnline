import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasicontactComponent } from './prasicontact.component';

describe('PrasicontactComponent', () => {
  let component: PrasicontactComponent;
  let fixture: ComponentFixture<PrasicontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasicontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasicontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
