import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelreportComponent } from './hotelreport.component';

describe('HotelreportComponent', () => {
  let component: HotelreportComponent;
  let fixture: ComponentFixture<HotelreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
