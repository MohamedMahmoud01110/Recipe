import { Component, Input, OnInit } from '@angular/core';
import { MealsCardComponent } from './meals-card/meals-card.component';
import { MealsCategoriesService } from '../../services/meals-categories.service';

@Component({
  selector: 'app-meals-body',
  imports: [MealsCardComponent],
  templateUrl: './meals-body.component.html',
  styleUrl: './meals-body.component.css',
})
export class MealsBodyComponent {
  @Input() meals?: any;
  @Input() regionBoolean?: boolean;
}
