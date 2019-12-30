import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PAGE_SETTINGS } from '../../demo-wrapper/demo-wrapper.component';
import { DemoWrapperModule } from '../../demo-wrapper/demo-wrapper.module';
import { PreloadApiDemoComponent } from './preload-api-demo.component';
import { settings } from './preload-api-demo.data';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecaptchaLoaderService, RecaptchaModule } from 'ng-recaptcha';

declare var grecaptcha: any;

@Injectable()
export class PreloadedRecaptchaAPIService {
  ready: Observable<any>;

  constructor() {
    const readySubject = new BehaviorSubject<any>(null);
    this.ready = readySubject.asObservable();

    const interval = setInterval(() => {
      if (typeof grecaptcha === 'undefined') {
        return;
      }

      clearInterval(interval);
      readySubject.next(grecaptcha);
    }, 50);
  }
}

export const service = new PreloadedRecaptchaAPIService();

@NgModule({
  bootstrap: [PreloadApiDemoComponent],
  declarations: [PreloadApiDemoComponent],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot(),
    DemoWrapperModule
  ],
  providers: [
    {
      provide: RecaptchaLoaderService,
      useValue: service
    },
    { provide: PAGE_SETTINGS, useValue: settings }
  ]
})
export class DemoModule {
}
