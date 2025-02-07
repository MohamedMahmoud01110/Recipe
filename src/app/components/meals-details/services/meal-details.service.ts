import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Details } from '../data/meal-details';

@Injectable({
  providedIn: 'root',
})
export class MealDetailsService {
  mealId?: string;
  constructor(private httpClient: HttpClient) {}
  getMealDetails() {
    return this.httpClient.get<Details>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`
    );
  }
}
