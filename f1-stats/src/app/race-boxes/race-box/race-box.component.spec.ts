import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceBoxComponent } from './prev-race-box.component';

describe('RaceBoxComponent', () => {
  let component: RaceBoxComponent;
  let fixture: ComponentFixture<RaceBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceBoxComponent]
    });
    fixture = TestBed.createComponent(RaceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
