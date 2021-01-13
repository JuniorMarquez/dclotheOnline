import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasidevolucionesComponent } from './prasidevoluciones.component';

describe('PrasidevolucionesComponent', () => {
  let component: PrasidevolucionesComponent;
  let fixture: ComponentFixture<PrasidevolucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasidevolucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasidevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
