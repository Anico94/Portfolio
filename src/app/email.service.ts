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

  private lastEmailTime: number = 0;
  private readonly throttleDelay: number = 2000;

  constructor() {
    emailjs.init({
      publicKey: this.emailJSPublicAPIKey,
    });
  }

  sendEmail(
    userEmail: string,
    message: string
  ): Promise<EmailJSResponseStatus> {
    const now = Date.now();
    const timeSinceLastEmail = now - this.lastEmailTime;

    if (timeSinceLastEmail < this.throttleDelay) {
      const remainingTime = this.throttleDelay - timeSinceLastEmail;
      return Promise.reject(
        new Error(
          `Please wait ${Math.ceil(
            remainingTime / 1000
          )} seconds before sending another email.`
        )
      );
    }

    this.lastEmailTime = now;

    const templateParams = {
      userEmail,
      message,
    };

    return emailjs.send(
      this.emailJSServiceId,
      this.emailJStemplateId,
      templateParams
    );
  }
}
