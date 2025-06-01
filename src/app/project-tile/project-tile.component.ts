import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  imports: [],
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
}
