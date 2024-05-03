import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeNavigationComponent } from './life-navigation.component';

describe('LifeNavigationComponent', () => {
  let component: LifeNavigationComponent;
  let fixture: ComponentFixture<LifeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
