import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorereportComponent } from './morereport.component';

describe('MorereportComponent', () => {
  let component: MorereportComponent;
  let fixture: ComponentFixture<MorereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
