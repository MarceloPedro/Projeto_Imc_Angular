import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvcFormComponent } from './mvc-form.component';

describe('MvcFormComponent', () => {
  let component: MvcFormComponent;
  let fixture: ComponentFixture<MvcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
