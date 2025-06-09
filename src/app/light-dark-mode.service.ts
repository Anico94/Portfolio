import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LightDarkModeService {
  public isDarkMode: boolean = true;
}
