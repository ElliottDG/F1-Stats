import { Component, Input } from '@angular/core';
import { RaceDisplay } from 'src/app/enums/race-display';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-schedule-race-box',
  templateUrl: './schedule-race-box.component.html',
  styleUrls: ['./schedule-race-box.component.scss']
})
export class ScheduleRaceBoxComponent {
  constructor (private iconsService: IconsService) { }

  @Input() nextRace: any;
  @Input() numOfRaces: number = 0;

  raceToDisplay: RaceDisplay = RaceDisplay.next;
  isDataAvailable: boolean = false;

  ngOnChanges() {
    this.iconsService.registerIcons();
    if (this.nextRace) { this.initNextRace(); }
    
  }

  trackName: string = 'Track Name';
  gpFlag: string = '';
  gpName: string = 'Grand Prix Name';
  round: string = '0/0'
  date: string = '';
  displayedColumns = ['session', 'time'];
  dataSource = [{session: 'session', time: 'date'}];

  initNextRace() {
    this.trackName = this.nextRace?.Circuit?.circuitName;
    this.gpFlag = '';
    this.gpName = this.nextRace?.raceName;
    this.round = this.nextRace?.round + '/' + this.numOfRaces;
    this.date = this.nextRace?.date;
    if (this.nextRace?.Sprint) {
      this.dataSource = [];
      this.dataSource.push({session: 'FP1 (Fri)', time: '1970-01-01T'+this.nextRace?.FirstPractice?.time});
      this.dataSource.push({session: 'FP2 (Fri)', time: '1970-01-01T'+this.nextRace?.SecondPractice?.time});
      this.dataSource.push({session: 'Q1 (Sat)', time: '1970-01-01T'+this.nextRace?.Qualifying?.time});
      this.dataSource.push({session: 'SR (Sat)', time: '1970-01-01T'+this.nextRace?.Sprint?.time});
      this.dataSource.push({session: 'Race (Sun)', time: '1970-01-01T'+this.nextRace?.time});
    } else {
      this.dataSource = [];
      this.dataSource.push({session: 'FP1 (Fri)', time: '1970-01-01T'+this.nextRace?.FirstPractice?.time});
      this.dataSource.push({session: 'FP2 (Fri)', time: '1970-01-01T'+this.nextRace?.SecondPractice?.time});
      this.dataSource.push({session: 'FP3 (Sat)', time: '1970-01-01T'+this.nextRace?.ThirdPractice?.time});
      this.dataSource.push({session: 'Q1 (Sat)', time: '1970-01-01T'+this.nextRace?.Qualifying?.time});
      this.dataSource.push({session: 'Race (Sun)', time: '1970-01-01T'+this.nextRace?.time});
    }
    this.isDataAvailable = true;
    }

}
