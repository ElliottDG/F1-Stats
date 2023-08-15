import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { ScheduleRaceBoxComponent } from './schedule-race-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ScheduleRaceBoxComponent', () => {
  let component: ScheduleRaceBoxComponent;
  let fixture: ComponentFixture<ScheduleRaceBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleRaceBoxComponent],
      imports: [MatTableModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.inject(MatTableModule);
    fixture = TestBed.createComponent(ScheduleRaceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
