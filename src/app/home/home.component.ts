import { Component} from '@angular/core';
import { RaceDisplay } from 'src/app/enums/race-display';
import { F1ApiService } from '../services/f1-api.service';
import { forkJoin, switchMap, map } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  constructor (private f1Api: F1ApiService,) { }

  next = RaceDisplay.next;
  previous = RaceDisplay.previous;
  nextRace: any;
  previousRace: any;
  prevRaceResults: any;
  currSeason: any;
  fastestLapPrevInfo: any;
  fastestLapNextInfoLastSeason: any;
  nextRaceResultsLastSeason: any;
  numOfRaces: number = 0;
  seasonPrev: number = 0;
  currDriverStandings: any;
  currTeamStandings: any;
   
  ngOnInit(): void { 
        this.f1Api.get('current/next.json').pipe(switchMap((data: any) => {
          this.nextRace = data.MRData.RaceTable.Races[0];
          this.seasonPrev = this.nextRace.season - 1;
      return forkJoin([this.f1Api.get(`${data.MRData.RaceTable.Races[0].season - 1}/circuits/${data?.MRData?.RaceTable?.Races[0]?.Circuit?.circuitId}/fastest/1/results.json`),
      this.f1Api.get(`${data.MRData.RaceTable.Races[0].season - 1}/circuits/${data?.MRData?.RaceTable?.Races[0]?.Circuit?.circuitId}/results.json?limit=3`)
     ]).pipe(
      map(
        ([fastResults, results]) => {return {fastResults,results}
        })
      )
        })
   ).subscribe((data: any) => {
    this.fastestLapNextInfoLastSeason = data.fastResults.MRData.RaceTable.Races[0].Results[0];
    this.nextRaceResultsLastSeason = data.results.MRData.RaceTable.Races[0];});
    this.f1Api.get('current/last.json').subscribe((data: any) => { this.previousRace = data?.MRData?.RaceTable?.Races[0];}, (error: any) => {console.log(error);});
    this.f1Api.get('current.json').subscribe((data: any) => { this.numOfRaces = data.MRData?.total; }, (error: any) => {console.log(error);});
    this.f1Api.get('current/last/results.json?limit=3').subscribe((data: any) => { this.prevRaceResults = data?.MRData?.RaceTable?.Races[0];}, (error: any) => {console.log(error);});
    this.f1Api.get('current/last/fastest/1/results.json').subscribe((data: any) => { this.fastestLapPrevInfo = data?.MRData?.RaceTable?.Races[0]?.Results[0];}, (error: any) => {console.log(error);});
    this.f1Api.get('current/driverStandings.json').subscribe((data: any) => { this.currDriverStandings = data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;}, (error: any) => {console.log(error);});
    this.f1Api.get('current/constructorStandings.json').subscribe((data: any) => { this.currTeamStandings = data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings;}, (error: any) => {console.log(error);});
    }
  
}
