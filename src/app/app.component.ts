import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FeaturedComponent } from './featured/featured.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    FontAwesomeModule,
    FeaturedComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AboutMeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDarkMode = false;
  faCoffee = faCoffee;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
