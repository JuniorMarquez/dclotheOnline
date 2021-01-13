import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasiinstagramfeedComponent } from './prasiinstagramfeed.component';

describe('PrasiinstagramfeedComponent', () => {
  let component: PrasiinstagramfeedComponent;
  let fixture: ComponentFixture<PrasiinstagramfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasiinstagramfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasiinstagramfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
