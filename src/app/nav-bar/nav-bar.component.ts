import { Component } from '@angular/core';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-nav-bar',
  imports: [NavigationLinksComponent, SocialsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
