import { TestBed } from '@angular/core/testing';

import { MealDetailsService } from './meal-details.service';

describe('MealDetailsService', () => {
  let service: MealDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
