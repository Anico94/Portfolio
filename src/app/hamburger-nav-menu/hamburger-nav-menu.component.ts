import { Component } from '@angular/core';
import { HamburgerMenuItemComponent } from '../hamburger-menu-item/hamburger-menu-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hamburger-nav-menu',
  imports: [
    HamburgerMenuItemComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './hamburger-nav-menu.component.html',
  styleUrl: './hamburger-nav-menu.component.scss',
})
export class HamburgerNavMenuComponent {
  public faBars: IconDefinition = faBars;
  public faGithub: IconDefinition = faGithub;
  public faLinkedin: IconDefinition = faLinkedin;
  public faEnvelope: IconDefinition = faEnvelope;
  public faFileLines: IconDefinition = faFileLines;
}
