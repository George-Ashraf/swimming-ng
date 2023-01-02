import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofComponent } from './typeof.component';

describe('TypeofComponent', () => {
  let component: TypeofComponent;
  let fixture: ComponentFixture<TypeofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
