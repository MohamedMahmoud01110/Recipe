import { Component, OnInit } from '@angular/core';
import { MealDetails, RefactoredMealDetails } from './data/meal-details';
import { MealDetailsService } from './services/meal-details.service';

@Component({
  selector: 'app-meals-details',
  imports: [],
  templateUrl: './meals-details.component.html',
  styleUrl: './meals-details.component.css',
})
export class MealsDetailsComponent implements OnInit {
  constructor(private mealDetailsService: MealDetailsService) {}

  mealDetails!: RefactoredMealDetails;

  ngOnInit(): void {
    this.getMealDetails();
  }

  getMealDetails(): void {
    this.mealDetailsService.getMealDetails().subscribe({
      next: (res) => {
        if (res.meals && res.meals.length > 0) {
          this.mealDetails = this.refactorMealDetails(res.meals[0]);
          console.log(this.mealDetails);
        }
      },
      error: (err) => {
        console.error('Error fetching meal details:', err);
      },
    });
  }

  refactorMealDetails(meal: MealDetails): RefactoredMealDetails {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof MealDetails];
      const measure = meal[`strMeasure${i}` as keyof MealDetails];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(ingredient);
      }
      if (measure && measure.trim() !== '') {
        measures.push(measure);
      }
    }

    return {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
      strInstructions: meal.strInstructions,
      strMealThumb: meal.strMealThumb,
      strTags: meal.strTags,
      strYoutube: meal.strYoutube,
      strSource: meal.strSource,
      ingredients,
      measures,
    };
  }
}
