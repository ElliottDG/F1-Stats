import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsComponent } from './standings.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsComponent],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(StandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
