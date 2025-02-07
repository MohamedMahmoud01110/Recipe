import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsDetailsComponent } from './meals-details.component';

describe('MealsDetailsComponent', () => {
  let component: MealsDetailsComponent;
  let fixture: ComponentFixture<MealsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
