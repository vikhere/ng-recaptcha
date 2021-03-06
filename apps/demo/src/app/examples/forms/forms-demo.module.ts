import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PAGE_SETTINGS } from '../../demo-wrapper/demo-wrapper.component';
import { DemoWrapperModule } from '../../demo-wrapper/demo-wrapper.module';
import { FormsDemoComponent } from './forms-demo.component';
import { settings } from './forms-demo.data';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  bootstrap: [FormsDemoComponent],
  declarations: [FormsDemoComponent],
  imports: [
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BrowserModule,
    FormsModule,
    DemoWrapperModule
  ],
  providers: [
    { provide: PAGE_SETTINGS, useValue: settings }
  ]
})
export class DemoModule {
}
