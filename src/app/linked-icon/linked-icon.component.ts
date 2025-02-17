import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-linked-icon',
  imports: [FontAwesomeModule],
  templateUrl: './linked-icon.component.html',
  styleUrl: './linked-icon.component.css',
})
export class LinkedIconComponent {
  @Input() fontAwesomeIcon!: any;
  @Input() link!: string;

  onLink(url: string) {
    window.open(url, '_blank');
  }
}
