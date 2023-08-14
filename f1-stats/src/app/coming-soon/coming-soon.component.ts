import { Component } from '@angular/core';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  constructor(
    private iconsService: IconsService,
  ){
  }  

  ngOnInit(): void {
    this.iconsService.registerIcons();
  }
}
