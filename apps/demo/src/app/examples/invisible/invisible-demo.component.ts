import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recaptcha-demo',
  templateUrl: './invisible-demo.component.html',
})
export class InvisibleDemoComponent {
  captchaResponse = '';
  resolved(captchaResponse: string) {
    const newResponse = captchaResponse
      ? `${captchaResponse.substr(0, 7)}...${captchaResponse.substr(-7)}`
      : captchaResponse;
    this.captchaResponse += `${JSON.stringify(newResponse)}\n`;
  }
}
