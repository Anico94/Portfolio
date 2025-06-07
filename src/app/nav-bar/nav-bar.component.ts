import { Component } from '@angular/core';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { SocialsComponent } from '../socials/socials.component';
import { HamburgerNavMenuComponent } from '../hamburger-nav-menu/hamburger-nav-menu.component';
import { LightDarkComponent } from '../light-dark/light-dark.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NavigationLinksComponent,
    SocialsComponent,
    HamburgerNavMenuComponent,
    LightDarkComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
