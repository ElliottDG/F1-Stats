import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standings-box',
  templateUrl: './standings-box.component.html',
  styleUrls: ['./standings-box.component.scss']
})
export class StandingsBoxComponent {

  displayedStandings: string = "Driver";
  isDriverStandings: boolean = true;
  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: any;

  @Input() driverStandings: any;
  @Input() teamStandings: any;

  ngOnChanges(): void {
    this.changeStandings();
    }

  changeStandings(): void {
    if (this.isDriverStandings) {
      this.dataSource = this.driverStandings;
      this.displayedStandings = "Driver";
      this.isDriverStandings = false;
    } else {
      this.dataSource = this.teamStandings;
      this.displayedStandings = "Constructor";
      this.isDriverStandings = true;
    }
  }
}
