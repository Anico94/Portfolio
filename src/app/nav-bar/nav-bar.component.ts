import { Component } from '@angular/core';
import { NameComponent } from '../name/name.component';
import { NavigationLinksComponent } from '../navigation-links/navigation-links.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-nav-bar',
  imports: [NameComponent, NavigationLinksComponent, SocialsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
