import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FeaturedComponent } from './featured/featured.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechologiesComponent } from './techologies/techologies.component';
import { ContactComponent } from './contact/contact.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    FontAwesomeModule,
    FeaturedComponent,
    AboutMeComponent,
    ProjectsComponent,
    TechologiesComponent,
    ContactComponent,
    ProfessionalExperienceComponent,
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
