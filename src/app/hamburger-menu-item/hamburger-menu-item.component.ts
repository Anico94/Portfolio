import { Component, Input } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-hamburger-menu-item',
  imports: [FontAwesomeModule, MatIconModule],
  templateUrl: './hamburger-menu-item.component.html',
  styleUrl: './hamburger-menu-item.component.scss',
})
export class HamburgerMenuItemComponent {
  @Input() public link!: String;
  @Input() public newTab: Boolean = false;
  @Input() public fontAwesomeIcon!: IconDefinition;
  @Input() public externalLinkIcon: Boolean = false;
  @Input() public label!: String;
}
