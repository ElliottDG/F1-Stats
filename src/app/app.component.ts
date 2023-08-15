import { Component } from '@angular/core';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconsService: IconsService,) {
  }

  nextRace: any;
  previousRace: any;
  prevRaceResults: any;
  currSeason: any;

  ngOnInit(): void {
    this.iconsService.registerIcons();
  }
  title = 'f1-stats';
}
