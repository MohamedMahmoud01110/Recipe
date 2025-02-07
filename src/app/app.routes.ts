import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'meals',
    pathMatch: 'full',
  },
  {
    path: 'meals',
    loadComponent: () =>
      import('./components/meals/meals.component').then(
        (c) => c.MealsComponent
      ),
  },
  {
    path: 'mealDetails',
    loadComponent: () =>
      import('./components/meals-details/meals-details.component').then(
        (c) => c.MealsDetailsComponent
      ),
  },
];
