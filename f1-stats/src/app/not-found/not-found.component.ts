import { Component } from '@angular/core';
import { IconsService } from '../services/icons.service';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private iconsService: IconsService,
  ){
  } 


  ngOnInit(): void {
    this.iconsService.registerIcons();
  }

}
