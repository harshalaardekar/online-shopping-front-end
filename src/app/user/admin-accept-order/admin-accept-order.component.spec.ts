import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptOrderComponent } from './admin-accept-order.component';

describe('AdminAcceptOrderComponent', () => {
  let component: AdminAcceptOrderComponent;
  let fixture: ComponentFixture<AdminAcceptOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcceptOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAcceptOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
