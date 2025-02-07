import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsHeaderComponent } from './meals-header.component';

describe('MealsHeaderComponent', () => {
  let component: MealsHeaderComponent;
  let fixture: ComponentFixture<MealsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
