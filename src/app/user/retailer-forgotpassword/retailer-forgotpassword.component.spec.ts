import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerForgotpasswordComponent } from './retailer-forgotpassword.component';

describe('RetailerForgotpasswordComponent', () => {
  let component: RetailerForgotpasswordComponent;
  let fixture: ComponentFixture<RetailerForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerForgotpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
