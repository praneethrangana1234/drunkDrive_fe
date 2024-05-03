import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantaddComponent } from './consultantadd.component';

describe('ConsultantaddComponent', () => {
  let component: ConsultantaddComponent;
  let fixture: ComponentFixture<ConsultantaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantaddComponent]
    });
    fixture = TestBed.createComponent(ConsultantaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
