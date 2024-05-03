import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercComponent } from './registerc.component';

describe('RegistercComponent', () => {
  let component: RegistercComponent;
  let fixture: ComponentFixture<RegistercComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistercComponent]
    });
    fixture = TestBed.createComponent(RegistercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
