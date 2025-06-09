import { Component } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LightDarkModeService } from '../light-dark-mode.service';

@Component({
  selector: 'app-light-dark',
  imports: [MatButtonModule, MatFabButton, MatIcon],
  templateUrl: './light-dark.component.html',
  styleUrl: './light-dark.component.scss',
})
export class LightDarkComponent {
  constructor(public lightDarkModeState: LightDarkModeService) {}

  toggleDarkMode() {
    this.lightDarkModeState.isDarkMode = !this.lightDarkModeState.isDarkMode;
    if (this.lightDarkModeState.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
