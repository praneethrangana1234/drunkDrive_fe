import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeconsultComponent } from './makeconsult.component';

describe('MakeconsultComponent', () => {
  let component: MakeconsultComponent;
  let fixture: ComponentFixture<MakeconsultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeconsultComponent]
    });
    fixture = TestBed.createComponent(MakeconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
