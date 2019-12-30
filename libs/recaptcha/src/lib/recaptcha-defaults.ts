import { ReCaptchaSize, ReCaptchaTheme, ReCaptchaType } from './grecaptcha';

export interface RecaptchaDefaults {
  siteKey?: string;
  theme?: ReCaptchaTheme;
  type?: ReCaptchaType;
  size?: ReCaptchaSize | 'invisible';
  tabIndex?: number;
  badge?: 'bottomright' | 'bottomleft' | 'inline';
  language?: string;
}

export class RecaptchaDefaults {
  constructor(options: RecaptchaDefaults) {
    Object.assign(this, options);
  }
}
