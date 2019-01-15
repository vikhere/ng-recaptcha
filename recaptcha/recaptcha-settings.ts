import { InjectionToken } from '@angular/core';
import { ReCaptchaBadge, ReCaptchaSize, ReCaptchaTheme, ReCaptchaType } from './grecaptcha';

export const RECAPTCHA_SETTINGS = new InjectionToken<RecaptchaSettings>('recaptcha-settings');

export interface RecaptchaSettings {
  siteKey?: string;
  theme?: ReCaptchaTheme;
  type?: ReCaptchaType;
  size?: ReCaptchaSize;
  badge?: ReCaptchaBadge;
}
