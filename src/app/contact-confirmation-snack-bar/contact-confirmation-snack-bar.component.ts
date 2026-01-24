import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact-confirmation-snack-bar',
  imports: [MatIcon, MatIconButton],
  templateUrl: './contact-confirmation-snack-bar.component.html',
  styleUrl: './contact-confirmation-snack-bar.component.scss',
})
export class ContactConfirmationSnackBarComponent {
  contactConfirmationSnackBar = inject(MatSnackBarRef);
}
