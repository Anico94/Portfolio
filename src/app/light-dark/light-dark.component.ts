import { Component } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-light-dark',
  imports: [MatButtonModule, MatFabButton, MatIcon],
  templateUrl: './light-dark.component.html',
  styleUrl: './light-dark.component.scss',
})
export class LightDarkComponent {
  public isDarkMode: boolean = true;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
