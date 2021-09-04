import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreminmComponent } from './preminm.component';

describe('PreminmComponent', () => {
  let component: PreminmComponent;
  let fixture: ComponentFixture<PreminmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreminmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreminmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
