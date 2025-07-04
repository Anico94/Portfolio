import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public emailJSServiceId: string = environment.emailJSServiceId;
  public emailJStemplateId: string = environment.emailJStemplateId;
  public emailJSPublicAPIKey: string = environment.emailJSPublicAPIKey;

  constructor() {
    emailjs.init({
      publicKey: this.emailJSPublicAPIKey,
      limitRate: {
        id: 'app',
        throttle: 5000,
      },
    });
  }

  sendEmail(userEmail: string, message: string) {
    const templateParams = {
      userEmail,
      message,
    };

    emailjs
      .send(this.emailJSServiceId, this.emailJStemplateId, templateParams)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
