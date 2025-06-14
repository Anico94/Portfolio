import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public submitAttempted = false;

  contactForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change',
    }),
    message: new FormControl('', {
      validators: Validators.required,
      updateOn: 'submit',
    }),
  });

  public onSend(): void {
    console.log('Send Pressed');
    this.submitAttempted = true;
  }

  public checkValidity(event: Event) {
    if (!this.email?.hasError('email')) {
      this.submitAttempted = false;
    }
    console.log(event);
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
