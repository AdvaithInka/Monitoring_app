import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsComponent } from './form-fields.component';

describe('FormFieldsComponent', () => {
  let component: FormFieldsComponent;
  let fixture: ComponentFixture<FormFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldsComponent]
    });
    fixture = TestBed.createComponent(FormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
