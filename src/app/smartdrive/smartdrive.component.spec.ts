import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartdriveComponent } from './smartdrive.component';

describe('SmartdriveComponent', () => {
  let component: SmartdriveComponent;
  let fixture: ComponentFixture<SmartdriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartdriveComponent]
    });
    fixture = TestBed.createComponent(SmartdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
