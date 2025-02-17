import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-links',
  imports: [RouterModule],
  templateUrl: './navigation-links.component.html',
  styleUrl: './navigation-links.component.css',
})
export class NavigationLinksComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
}
