import { Component } from '@angular/core';
import { F1ApiService } from '../services/f1-api.service';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {

  constructor (private f1Api: F1ApiService,) { }

  driverStandings: any;
  teamStandings: any;
  season: number = 0;
  startYear: number = 1950;
  yearArray: number[] = []; 

  ngOnInit(): void {
    this.f1Api.get('current/driverStandings.json').subscribe((data: any) => { this.driverStandings = data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings; this.season = data?.MRData?.StandingsTable?.season; (this.yearArray = Array.from({ length: this.season - this.startYear + 1 }, (_, index) => this.startYear + index)).reverse();}, (error: any) => {console.log(error);});
    this.f1Api.get('current/constructorStandings.json').subscribe((data: any) => { this.teamStandings = data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings;}, (error: any) => {console.log(error);});
  }

  ngOnChanges(): void {
   
  }

  changeStandings(): void {
    this.f1Api.get(`${this.season}/driverStandings.json`).subscribe((data: any) => { this.driverStandings = data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;console.log(this.driverStandings)}, (error: any) => {console.log(error);});
    this.f1Api.get(`${this.season}/constructorStandings.json`).subscribe((data: any) => { this.teamStandings = data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings;}, (error: any) => {console.log(error);});
  }

}
