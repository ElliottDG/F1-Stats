import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-all-standings',
  templateUrl: './all-standings.component.html',
  styleUrls: ['./all-standings.component.scss']
})
export class AllStandingsComponent {

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: any;

  @Input() season: number = 0;
  @Input() standings: string = "";
  @Input() driverStandings: any;
  @Input() teamStandings: any;

  ngOnChanges(): void {
    if (this.standings === "Driver") {
      this.dataSource = this.driverStandings;
    } else {
      this.dataSource = this.teamStandings;
    }
  }
}
