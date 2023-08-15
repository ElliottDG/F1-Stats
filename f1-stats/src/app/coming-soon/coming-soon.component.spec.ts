import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { ComingSoonComponent } from './coming-soon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComingSoonComponent],
      imports: [MatIconModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
