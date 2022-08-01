import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRetailerComponent } from './admin-add-retailer.component';

describe('AdminAddRetailerComponent', () => {
  let component: AdminAddRetailerComponent;
  let fixture: ComponentFixture<AdminAddRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddRetailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
