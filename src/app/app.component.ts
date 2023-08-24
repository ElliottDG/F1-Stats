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
  isDark: boolean = true;

  ngOnInit(): void {
    this.iconsService.registerIcons();
    this.setTheme();
  }
  title = 'f1-stats';

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(): void {
    document.documentElement.classList.toggle('dark-theme', this.isDark);
  }
}
