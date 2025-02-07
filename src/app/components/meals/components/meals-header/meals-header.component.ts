import { Category } from './../../data/meals-categories';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MealsCategoriesService } from '../../services/meals-categories.service';

@Component({
  selector: 'app-meals-header',
  imports: [],
  templateUrl: './meals-header.component.html',
  styleUrl: './meals-header.component.css',
})
export class MealsHeaderComponent implements OnInit {
  activeCategory: string = 'All';
  categories!: boolean[];
  mealsCategories: Category[] = [];
  constructor(private mealsCategoriesService: MealsCategoriesService) {}
  ngOnInit(): void {
    this.getMealsCategories();
    this.getAllMeals();
  }
  getMealsCategories() {
    this.mealsCategoriesService.getMealsCategories().subscribe({
      next: (response) => {
        this.mealsCategories = response.meals;
      },
    });
  }
  @Output() regionBoolean: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() category: EventEmitter<any> = new EventEmitter<any>();
  sendCategory(category: string): void {
    this.activeCategory = category;
    if (category === 'All') {
      this.getAllMeals();
    } else {
      this.getMealsByCategory(category);
    }
  }
  getAllMeals(): void {
    this.mealsCategoriesService.getMealsAll().subscribe({
      next: (response) => {
        this.category.emit(response.meals);
        this.regionBoolean.emit(false);
      },
    });
  }
  getMealsByCategory(category: string): void {
    this.mealsCategoriesService.getMealsByCategory(category).subscribe({
      next: (response) => {
        this.category.emit(response.meals);
        this.regionBoolean.emit(true);
      },
    });
  }
  getCategory(event: Event) {
    let element = event.target as HTMLSelectElement;
    this.sendCategory(element.value);
  }
}
