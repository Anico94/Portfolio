import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactConfirmationSnackBarComponent } from '../contact-confirmation-snack-bar/contact-confirmation-snack-bar.component';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatIcon, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  public submitAttempted = false;

  private _contactConfirmationSnackBar = inject(MatSnackBar);
  public durationInSeconds: number = 5;

  contactForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change',
    }),
    message: new FormControl('', {
      validators: Validators.required,
      updateOn: 'change',
    }),
  });

  public onSend(): void {
    this.submitAttempted = true;

    if (this.contactForm.valid) {
      this.emailService.sendEmail(
        this.email?.value ?? '',
        this.message?.value ?? ''
      );
      this._contactConfirmationSnackBar.openFromComponent(
        ContactConfirmationSnackBarComponent,
        {
          duration: this.durationInSeconds * 1000,
        }
      );
    }
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
