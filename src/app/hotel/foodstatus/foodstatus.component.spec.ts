import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstatusComponent } from './foodstatus.component';

describe('FoodstatusComponent', () => {
  let component: FoodstatusComponent;
  let fixture: ComponentFixture<FoodstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
