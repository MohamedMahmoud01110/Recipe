import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsCardComponent } from './meals-card.component';

describe('MealsCardComponent', () => {
  let component: MealsCardComponent;
  let fixture: ComponentFixture<MealsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
