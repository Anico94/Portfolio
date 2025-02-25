import { Component } from '@angular/core';
import { LinkedIconComponent } from '../linked-icon/linked-icon.component';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-socials',
  imports: [LinkedIconComponent, FontAwesomeModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css',
})
export class SocialsComponent {
  public faGithub: IconDefinition = faGithub;
  public faLinkedin: IconDefinition = faLinkedin;
  public faEnvelope: IconDefinition = faEnvelope;
  public faFileLines: IconDefinition = faFileLines;

  //Links
  public github: string = 'https://www.google.com';
  public linkedIn: string = 'https://www.google.com';
  public email: string = 'https://www.google.com';
  public resume: string = 'https://www.google.com';
}
