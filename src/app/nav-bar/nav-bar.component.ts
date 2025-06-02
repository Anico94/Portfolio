import { Component } from '@angular/core';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { SocialsComponent } from '../socials/socials.component';
import { HamburgerNavMenuComponent } from '../hamburger-nav-menu/hamburger-nav-menu.component';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NavigationLinksComponent,
    SocialsComponent,
    HamburgerNavMenuComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
