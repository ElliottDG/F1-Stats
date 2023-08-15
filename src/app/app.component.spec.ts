import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(() => 
  TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatToolbarModule, MatIconModule],
    declarations: [AppComponent],
    providers: [MatIconRegistry]
  }));

  it('should create the app', () => {
    TestBed.inject(RouterTestingModule);
    TestBed.inject(MatToolbarModule);
    TestBed.inject(MatIconModule);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
