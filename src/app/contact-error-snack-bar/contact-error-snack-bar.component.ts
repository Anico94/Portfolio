import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact-error-snack-bar',
  imports: [MatIcon, MatIconButton],
  templateUrl: './contact-error-snack-bar.component.html',
  styleUrl: './contact-error-snack-bar.component.scss',
})
export class ContactErrorSnackBarComponent {
  contactErrorSnackBar = inject(MatSnackBarRef);
  //TODO: fix styling
}
