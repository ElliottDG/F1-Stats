import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  beforeEach(() => 
  TestBed.configureTestingModule({
    imports: [RouterTestingModule, MatToolbarModule, MatIconModule, MatSidenavModule,
      FlexLayoutModule, BrowserAnimationsModule],
    declarations: [AppComponent],
    providers: [MatIconRegistry]
  }));

  it('should create the app', () => {
    TestBed.inject(RouterTestingModule);
    TestBed.inject(MatToolbarModule);
    TestBed.inject(MatIconModule);
    TestBed.inject(MatSidenavModule);
    TestBed.inject(FlexLayoutModule);
    TestBed.inject(BrowserAnimationsModule);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
