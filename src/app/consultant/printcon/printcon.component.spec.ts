import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintconComponent } from './printcon.component';

describe('PrintconComponent', () => {
  let component: PrintconComponent;
  let fixture: ComponentFixture<PrintconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintconComponent]
    });
    fixture = TestBed.createComponent(PrintconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
