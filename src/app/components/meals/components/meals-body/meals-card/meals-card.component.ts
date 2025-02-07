import { Meal } from './../../../data/meals-categories';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealDetailsService } from '../../../../meals-details/services/meal-details.service';

@Component({
  selector: 'app-meals-card',
  imports: [RouterLink],
  templateUrl: './meals-card.component.html',
  styleUrl: './meals-card.component.css',
})
export class MealsCardComponent {
  constructor(private mealDetailsService: MealDetailsService) {}
  @Input() meal?: Meal;
  @Input() regionBoolean?: boolean;
  changeMealId(): void {
    this.mealDetailsService.mealId = this.meal?.idMeal as string;
  }
}
