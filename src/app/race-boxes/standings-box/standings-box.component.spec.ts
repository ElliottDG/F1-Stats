import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandingsBoxComponent } from './standings-box.component';
import { MatTableModule } from '@angular/material/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StandingsBoxComponent', () => {
  let component: StandingsBoxComponent;
  let fixture: ComponentFixture<StandingsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsBoxComponent],
      imports: [MatTableModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    TestBed.inject(MatTableModule);
    fixture = TestBed.createComponent(StandingsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
