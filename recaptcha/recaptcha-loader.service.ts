import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ReCaptcha } from './grecaptcha';

export const RECAPTCHA_LANGUAGE = new InjectionToken<string>('recaptcha-language');
declare const grecaptcha: ReCaptcha;

declare global {
  interface Window {
    grecaptcha: ReCaptcha;
    ngRecaptchaLoaded: () => void;
  }
}

@Injectable()
export class RecaptchaLoaderService {
  /**
   * @internal
   * @nocollapse
   */
  private static ready: BehaviorSubject<ReCaptcha> = null;

  public ready: Observable<ReCaptcha>;

  /** @internal */
  private language: string;

  constructor(
    // tslint:disable-next-line:no-any
    @Inject(PLATFORM_ID) private readonly platformId: any,
    @Optional() @Inject(RECAPTCHA_LANGUAGE) language?: string,
  ) {
    this.language = language;
    this.init();
    this.ready = isPlatformBrowser(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : of();
  }

  /** @internal */
  private init() {
    if (RecaptchaLoaderService.ready) {
      return;
    }
    if (isPlatformBrowser(this.platformId)) {
      window.ngRecaptchaLoaded = () => {
        RecaptchaLoaderService.ready.next(grecaptcha);
      };
      RecaptchaLoaderService.ready = new BehaviorSubject<ReCaptcha>(null);
      const script = document.createElement('script') as HTMLScriptElement;
      script.innerHTML = '';
      const langParam = this.language ? '&hl=' + this.language : '';
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=ngRecaptchaLoaded${langParam}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }
}
