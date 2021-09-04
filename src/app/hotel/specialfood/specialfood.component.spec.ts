import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialfoodComponent } from './specialfood.component';

describe('SpecialfoodComponent', () => {
  let component: SpecialfoodComponent;
  let fixture: ComponentFixture<SpecialfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
