import { Component } from '@angular/core';
import { TechnologyBadgeComponent } from '../technology-badge/technology-badge.component';

@Component({
  selector: 'app-techologies',
  imports: [TechnologyBadgeComponent],
  templateUrl: './techologies.component.html',
  styleUrl: './techologies.component.css',
})
export class TechologiesComponent {}
