import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfcircleComponent } from './halfcircle.component';

describe('HalfcircleComponent', () => {
  let component: HalfcircleComponent;
  let fixture: ComponentFixture<HalfcircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalfcircleComponent]
    });
    fixture = TestBed.createComponent(HalfcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
