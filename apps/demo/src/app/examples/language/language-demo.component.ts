import { Component } from '@angular/core';

@Component({
  selector: 'recaptcha-demo',
  templateUrl: './language-demo.component.html',
})
export class LanguageDemoComponent {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
