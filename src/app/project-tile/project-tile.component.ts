import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-tile',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.css',
})
export class ProjectTileComponent {
  private static counter = 0;
  public projectNumber!: number;

  constructor() {
    ProjectTileComponent.counter++;
    this.projectNumber = ProjectTileComponent.counter;
  }

  @Input() imageUrl!: String;
  @Input() projectTitle!: String;
  @Input() description!: String;
  @Input() imageAltText: String = 'Project Tile';
  @Input() gitHubLink!: String;
}
