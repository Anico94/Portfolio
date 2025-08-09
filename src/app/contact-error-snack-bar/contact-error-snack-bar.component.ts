import { Component, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact-error-snack-bar',
  imports: [MatButton, MatIcon, MatIconButton],
  templateUrl: './contact-error-snack-bar.component.html',
  styleUrl: './contact-error-snack-bar.component.scss',
})
export class ContactErrorSnackBarComponent {
  contactErrorSnackBar = inject(MatSnackBarRef);
  //TODO: fix styling
}
