import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsBoxComponent } from './standings-box.component';

describe('StandingsBoxComponent', () => {
  let component: StandingsBoxComponent;
  let fixture: ComponentFixture<StandingsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsBoxComponent]
    });
    fixture = TestBed.createComponent(StandingsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
