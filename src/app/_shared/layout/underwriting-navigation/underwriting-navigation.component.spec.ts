import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwritingNavigationComponent } from './underwriting-navigation.component';

describe('UnderwritingNavigationComponent', () => {
  let component: UnderwritingNavigationComponent;
  let fixture: ComponentFixture<UnderwritingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderwritingNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderwritingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
