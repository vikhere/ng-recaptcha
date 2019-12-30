import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output
} from '@angular/core';

import { ReCaptcha, ReCaptchaBadge, ReCaptchaSize, ReCaptchaTheme, ReCaptchaType } from './grecaptcha';
import { RecaptchaLoaderService } from './recaptcha-loader.service';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from './recaptcha-settings';
import { Subscription } from 'rxjs';

let nextId = 0;

@Component({
  exportAs: 'reCaptcha',
  selector: 're-captcha',
  template: ''
})
export class RecaptchaComponent implements AfterViewInit, OnDestroy {
  @Input()
  @HostBinding('attr.id')
  id = `ngrecaptcha-${nextId++}`;

  @Input() siteKey: string;
  @Input() theme: ReCaptchaTheme;
  @Input() type: ReCaptchaType;
  @Input() size: ReCaptchaSize;
  @Input() tabIndex: number;
  @Input() badge: ReCaptchaBadge;
  @Input() actionName?: string;

  @Output() resolved = new EventEmitter<string>();

  /** @internal */
  private subscription: Subscription;
  /** @internal */
  private widget: number;
  /** @internal */
  private grecaptcha: ReCaptcha;

  constructor(
    private elementRef: ElementRef,
    private loader: RecaptchaLoaderService,
    private zone: NgZone,
    @Optional() @Inject(RECAPTCHA_SETTINGS) settings?: RecaptchaSettings
  ) {
    if (!settings) {
      return;
    }
    this.siteKey = settings.siteKey;
    this.theme = settings.theme;
    this.type = settings.type;
    this.size = settings.size;
    this.badge = settings.badge;
  }

  ngAfterViewInit() {
    this.subscription = this.loader.ready.subscribe((grecaptcha: ReCaptcha) => {
      if (grecaptcha != null) {
        this.grecaptcha = grecaptcha;
        this.renderRecaptcha();
      }
    });
  }

  ngOnDestroy() {
    // reset the captcha to ensure it does not leave anything behind
    // after the component is no longer needed
    this.grecaptchaReset();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Executes the invisible recaptcha.
   * Does nothing if component's size is not set to "invisible".
   */
  execute(): void {
    if (this.size !== 'invisible' || this.widget === null) {
      return;
    }

    if (this.actionName) {
      this.grecaptcha.execute(this.widget, { action: this.actionName });
    } else {
      this.grecaptcha.execute(this.widget);
    }
  }

  reset() {
    if (this.widget === null) {
      return;
    }
    if (this.grecaptcha.getResponse(this.widget)) {
      // Only emit an event in case if something would actually change.
      // That way we do not trigger "touching" of the control if someone does a "reset"
      // on a non-resolved captcha.
      this.resolved.emit(null);
    }
    this.grecaptchaReset();
  }

  /** @internal */
  private expired() {
    this.resolved.emit(null);
  }

  /** @internal */
  private captchaReponseCallback(response: string) {
    this.resolved.emit(response);
  }

  /** @internal */
  private grecaptchaReset() {
    if (this.widget != null) {
      this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
    }
  }

  /** @internal */
  private renderRecaptcha() {
    this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
      badge: this.badge,
      callback: (response: string) => {
        this.zone.run(() => this.captchaReponseCallback(response));
      },
      'expired-callback': () => {
        this.zone.run(() => this.expired());
      },
      sitekey: this.siteKey,
      size: this.size,
      tabindex: this.tabIndex,
      theme: this.theme,
      type: this.type
    });
  }
}
