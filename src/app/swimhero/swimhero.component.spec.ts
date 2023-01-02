import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimheroComponent } from './swimhero.component';

describe('SwimheroComponent', () => {
  let component: SwimheroComponent;
  let fixture: ComponentFixture<SwimheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
