import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RaceBoxComponent } from '../race-boxes/race-box/race-box.component';
import { ScheduleRaceBoxComponent } from '../race-boxes/schedule-race-box/schedule-race-box.component';
import { StandingsBoxComponent } from '../race-boxes/standings-box/standings-box.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, RaceBoxComponent, ScheduleRaceBoxComponent, StandingsBoxComponent],
      imports: [RouterTestingModule,
        HttpClientModule],
        schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.inject(RouterTestingModule);
    TestBed.inject(HttpClientModule);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
