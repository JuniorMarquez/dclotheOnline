import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasiconfirmationoverlayComponent } from './prasiconfirmationoverlay.component';

describe('PrasiconfirmationoverlayComponent', () => {
  let component: PrasiconfirmationoverlayComponent;
  let fixture: ComponentFixture<PrasiconfirmationoverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasiconfirmationoverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasiconfirmationoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
