import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStandingsComponent } from './all-standings.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AllStandingsComponent', () => {
  let component: AllStandingsComponent;
  let fixture: ComponentFixture<AllStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStandingsComponent],
      imports: [MatCardModule, MatTableModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(AllStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
