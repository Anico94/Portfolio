import { Component } from '@angular/core';
import { LinkedIconComponent } from '../linked-icon/linked-icon.component';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LightDarkComponent } from '../light-dark/light-dark.component';

@Component({
  selector: 'app-socials',
  imports: [LinkedIconComponent, FontAwesomeModule, LightDarkComponent],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css',
})
export class SocialsComponent {
  public faGithub: IconDefinition = faGithub;
  public faLinkedin: IconDefinition = faLinkedin;
  public faEnvelope: IconDefinition = faEnvelope;
  public faFileLines: IconDefinition = faFileLines;

  //Links
  public gitHub: string = 'https://github.com/Anico94';
  public linkedIn: string = 'https://www.linkedin.com/in/alexnicolaidis/';
  public email: string = 'mailto:a.nicolaidis@outlook.com';
  public resume: string = './Alex_Nicolaidis_Resume_2025.pdf';
}
