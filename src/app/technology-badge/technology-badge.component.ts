import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-badge',
  imports: [],
  templateUrl: './technology-badge.component.html',
  styleUrl: './technology-badge.component.css',
})
export class TechnologyBadgeComponent {
  @Input() name!: String;
  @Input() svgSourceLink!: String;
  @Input() altText: String = 'Technology Icon';
}
