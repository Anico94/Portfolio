import { Component } from '@angular/core';
import { ProjectTileComponent } from '../project-tile/project-tile.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectTileComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
