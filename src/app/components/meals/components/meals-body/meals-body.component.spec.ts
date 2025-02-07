import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsBodyComponent } from './meals-body.component';

describe('MealsBodyComponent', () => {
  let component: MealsBodyComponent;
  let fixture: ComponentFixture<MealsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
