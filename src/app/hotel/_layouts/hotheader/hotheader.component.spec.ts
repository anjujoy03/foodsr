import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotheaderComponent } from './hotheader.component';

describe('HotheaderComponent', () => {
  let component: HotheaderComponent;
  let fixture: ComponentFixture<HotheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
