import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { RaceBoxComponent } from './race-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RaceBoxComponent', () => {
  let component: RaceBoxComponent;
  let fixture: ComponentFixture<RaceBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceBoxComponent],
      imports: [MatTableModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    TestBed.inject(MatTableModule);
    fixture = TestBed.createComponent(RaceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
