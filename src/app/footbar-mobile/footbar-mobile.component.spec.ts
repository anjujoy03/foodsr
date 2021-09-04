import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbarMobileComponent } from './footbar-mobile.component';

describe('FootbarMobileComponent', () => {
  let component: FootbarMobileComponent;
  let fixture: ComponentFixture<FootbarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootbarMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
