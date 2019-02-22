import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalBasicComponent } from './carousal-basic.component';

describe('CarousalBasicComponent', () => {
  let component: CarousalBasicComponent;
  let fixture: ComponentFixture<CarousalBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
