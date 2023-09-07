import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { RaceBoxComponent } from './race-boxes/race-box/race-box.component';
import { ScheduleRaceBoxComponent } from './race-boxes/schedule-race-box/schedule-race-box.component';
import { MatTableModule } from '@angular/material/table';
import { StandingsBoxComponent } from './race-boxes/standings-box/standings-box.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { StandingsComponent } from './standings/standings.component';
import { AllStandingsComponent } from './standings/all-standings/all-standings.component';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './custom-providers/http-interceptor';
import { MatProgressSpinnerModule}  from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingSoonComponent,
    NotFoundComponent,
    RaceBoxComponent,
    ScheduleRaceBoxComponent,
    StandingsBoxComponent,
    StandingsComponent,
    AllStandingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    CommonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [ MatIconRegistry,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
