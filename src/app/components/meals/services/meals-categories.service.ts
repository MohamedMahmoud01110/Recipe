import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MealCategories, Meals, MealsCategory } from '../data/meals-categories';

@Injectable({
  providedIn: 'root',
})
export class MealsCategoriesService {
  constructor(private httpClient: HttpClient) {}
  getMealsCategories() {
    return this.httpClient.get<MealCategories>(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
  }
  getMealsAll() {
    return this.httpClient.get<Meals>(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
  }
  getMealsByCategory(category: string) {
    return this.httpClient.get<MealsCategory>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }
}
