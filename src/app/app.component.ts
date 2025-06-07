import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FeaturedComponent } from './featured/featured.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechologiesComponent } from './techologies/techologies.component';
import { ContactComponent } from './contact/contact.component';

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
    ProjectTileComponent,
    ProjectsComponent,
    TechologiesComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDarkMode = true;
  faCoffee = faCoffee;
  ngOnInit(): void {
    document.documentElement.classList.add('dark');
  }
}
