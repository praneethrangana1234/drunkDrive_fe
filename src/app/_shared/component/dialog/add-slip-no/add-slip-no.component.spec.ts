import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSlipNoComponent } from './add-slip-no.component';

describe('AddSlipNoComponent', () => {
  let component: AddSlipNoComponent;
  let fixture: ComponentFixture<AddSlipNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSlipNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSlipNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
