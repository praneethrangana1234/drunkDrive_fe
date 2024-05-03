import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtypeaddComponent } from './jobtypeadd.component';

describe('JobtypeaddComponent', () => {
  let component: JobtypeaddComponent;
  let fixture: ComponentFixture<JobtypeaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobtypeaddComponent]
    });
    fixture = TestBed.createComponent(JobtypeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
