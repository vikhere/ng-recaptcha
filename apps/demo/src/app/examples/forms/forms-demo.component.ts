import { Component } from '@angular/core';

export interface FormModel {
  captcha?: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recaptcha-demo',
  styles: [`
      .error { color: crimson; }
      .success { color: green; }
  ` ],
  templateUrl: './forms-demo.component.html',
})
export class FormsDemoComponent {
  formModel: FormModel = {};
}
