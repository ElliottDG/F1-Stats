import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStandingsComponent } from './all-standings.component';

describe('AllStandingsComponent', () => {
  let component: AllStandingsComponent;
  let fixture: ComponentFixture<AllStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStandingsComponent]
    });
    fixture = TestBed.createComponent(AllStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
