import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css',
})
export class NameComponent {
  @Input() firstname!: string;
  @Input() lastname!: string;
}
