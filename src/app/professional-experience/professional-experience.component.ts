import { Component } from '@angular/core';
import { CompanySummaryComponent } from '../company-summary/company-summary.component';
import { CompanyProjectComponent } from '../company-project/company-project.component';

@Component({
  selector: 'app-professional-experience',
  imports: [CompanySummaryComponent, CompanyProjectComponent],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss',
})
export class ProfessionalExperienceComponent {}
