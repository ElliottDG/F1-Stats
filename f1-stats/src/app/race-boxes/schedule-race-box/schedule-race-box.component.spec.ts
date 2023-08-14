import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRaceBoxComponent } from './schedule-race-box.component';

describe('NextRaceBoxComponent', () => {
  let component: NextRaceBoxComponent;
  let fixture: ComponentFixture<NextRaceBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextRaceBoxComponent]
    });
    fixture = TestBed.createComponent(NextRaceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
