import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyBadgeComponent } from '../technology-badge/technology-badge.component';
import { TechnologiesService } from '../services/technologies.service';
import { TechnologyCategory } from '../models/technology.model';

@Component({
  selector: 'app-techologies',
  imports: [CommonModule, TechnologyBadgeComponent],
  templateUrl: './techologies.component.html',
  styleUrl: './techologies.component.css',
})
export class TechologiesComponent implements OnInit {
  categories: TechnologyCategory[] = [];

  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit(): void {
    this.technologiesService.getTechnologies().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
