import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointdetailsComponent } from './appointdetails.component';

describe('AppointdetailsComponent', () => {
  let component: AppointdetailsComponent;
  let fixture: ComponentFixture<AppointdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointdetailsComponent]
    });
    fixture = TestBed.createComponent(AppointdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
