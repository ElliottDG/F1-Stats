import { Component, Input } from '@angular/core';
import { RaceDisplay } from 'src/app/enums/race-display';
import { IconsService } from 'src/app/services/icons.service';
import * as i18IsoCountries from 'i18n-iso-countries';

@Component({
  selector: 'app-race-box',
  templateUrl: './race-box.component.html',
  styleUrls: ['./race-box.component.scss']
})
export class RaceBoxComponent {
  constructor (private iconsService: IconsService,) { }
    
  @Input() race: any;
  @Input() raceResults: any;
  @Input() fastestLapPrevInfo: any;
  @Input() numOfRaces: number = 0;
  @Input() prev: boolean = false;
  @Input() season: number = 0;
  @Input() raceToDisplay: RaceDisplay = RaceDisplay.previous;

  isDataAvailable: boolean = false;
  podium: string = "Podium";
  fastestLap: string = "Fastest Lap";

  ngOnChanges() {
    this.iconsService.registerIcons();
    if (this.race) { this.initPrevRace(); }
    
  }

  ngOnInit(): void {
    i18IsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  /*
   --- Variables used in HTML ---
  */
 trackName: string = 'Track Name';
 gpFlag: string = '';
 gpName: string = 'Grand Prix Name';
 round: string = '0/0'
 fastestLapDriver: string = 'Fastest Lap Driver';
 fastestLapTime: string = 'Fastest Lap Time';
 date: string = '';
 displayedColumns = ['position', 'driver',  'constructor'];
 dataSource = [];

 initPrevRace() {
 this.trackName = this.race?.Circuit.circuitName;
 this.gpFlag = '';
 this.gpName = this.race?.raceName;
 this.round = this.race?.round + '/' + this.numOfRaces;
 this.fastestLapDriver = this.fastestLapPrevInfo?.Driver?.givenName + ' ' + this.fastestLapPrevInfo?.Driver?.familyName;
 this.fastestLapTime = this.fastestLapPrevInfo?.FastestLap?.Time?.time;
 this.dataSource = this.raceResults?.Results;
 this.date = this.race?.date;
 this.isDataAvailable = true;
 this.gpFlag = i18IsoCountries.getSimpleAlpha2Code(this.race?.Circuit?.Location?.country, 'en');
 if (this.prev === true) {
  this.podium += ' ' + this.season;
  this.fastestLap += ' ' + this.season;
  this.gpFlag = i18IsoCountries.getSimpleAlpha2Code(this.race?.Circuit?.Location?.country, 'en');
  this.prev = false;
 }
 }
}
