import { TestBed } from '@angular/core/testing';

import { MealsCategoriesService } from './meals-categories.service';

describe('MealsCategoriesService', () => {
  let service: MealsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
