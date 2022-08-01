import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerAcceptOrderComponent } from './retailer-accept-order.component';

describe('RetailerAcceptOrderComponent', () => {
  let component: RetailerAcceptOrderComponent;
  let fixture: ComponentFixture<RetailerAcceptOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerAcceptOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerAcceptOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
