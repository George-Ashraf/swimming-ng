import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimbenefitComponent } from './swimbenefit.component';

describe('SwimbenefitComponent', () => {
  let component: SwimbenefitComponent;
  let fixture: ComponentFixture<SwimbenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimbenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimbenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
