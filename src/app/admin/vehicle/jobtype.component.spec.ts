import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtypeComponent } from './jobtype.component';

describe('JobtypeComponent', () => {
  let component: JobtypeComponent;
  let fixture: ComponentFixture<JobtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobtypeComponent]
    });
    fixture = TestBed.createComponent(JobtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
