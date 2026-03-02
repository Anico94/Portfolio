import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-project',
  imports: [],
  templateUrl: './company-project.component.html',
  styleUrl: './company-project.component.scss',
})
export class CompanyProjectComponent {
  @Input() projectName!: string;
  @Input() imagePath!: string;
}
