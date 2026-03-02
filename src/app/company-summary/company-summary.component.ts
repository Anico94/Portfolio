import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-company-summary',
  imports: [],
  templateUrl: './company-summary.component.html',
  styleUrl: './company-summary.component.scss',
})
export class CompanySummaryComponent {
  @Input() companyName!: string;
  @Input() jobTitle!: string;
  @Input() tenure!: string;
}
