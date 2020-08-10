import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recaptcha-demo',
  templateUrl: './global-config-demo.component.html',
})
export class GlobalConfigDemoComponent {
  resolved(captchaResponse: string) {
    // tslint:disable-next-line:no-console
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
