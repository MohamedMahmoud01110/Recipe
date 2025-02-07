import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBgComponent } from './black-bg.component';

describe('BlackBgComponent', () => {
  let component: BlackBgComponent;
  let fixture: ComponentFixture<BlackBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
