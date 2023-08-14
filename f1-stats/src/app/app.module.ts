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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingSoonComponent,
    NotFoundComponent,
    RaceBoxComponent,
    ScheduleRaceBoxComponent,
    StandingsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ MatIconRegistry ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
