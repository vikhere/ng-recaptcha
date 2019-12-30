export interface ReCaptcha {
  /**
   * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
   * @param container The HTML element to render the reCAPTCHA widget.
   * Specify either the ID of the container (string) or the DOM element itself.
   * @param parameters An object containing parameters as key=value pairs,
   * for example, {"sitekey": "your_site_key", "theme": "light"}. See @see render parameters.
   * @param inherit Invisible reCAPTCHA only. Use existing data-* attributes
   * on the element if the corresponding parameter is not specified.
   * The values in parameters will take precedence over the attributes.
   * @return the ID of the newly created widget.
   */
  render(container: (string | HTMLElement), parameters?: Parameters, inherit?: boolean): number;

  /**
   * Resets the reCAPTCHA widget.
   * @param optWidgetId Optional widget ID, defaults to the first widget created if unspecified.
   */
  reset(optWidgetId?: number): void;

  /**
   * Gets the response for the reCAPTCHA widget.
   * @param optWidgetId Optional widget ID, defaults to the first widget created if unspecified.
   * @return the response of the reCAPTCHA widget.
   */
  getResponse(optWidgetId?: number): string;

  /**
   * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button,
   * can also be used for recaptcha v3.
   * @param optWidgetId Optional widget ID, defaults to the first widget created if unspecified.
   * @param optActionName Optional action name, should be passed to get action specific recaptcha V3 recpatcha.
   */
  execute(optWidgetId?: number, optActionName?: { action: string }): void;
}

export type ReCaptchaTheme = 'light' | 'dark';
export type ReCaptchaType = 'image' | 'audio';
export type ReCaptchaSize = 'normal' | 'compact' | 'invisible';
export type ReCaptchaBadge = 'bottomright' | 'bottomleft' | 'inline';

export interface Parameters {
  /**
   * Your sitekey.
   */
  sitekey: string;

  /**
   * Optional. The color theme of the widget.
   * Accepted values: "light", "dark"
   * @default "light"
   */
  theme?: ReCaptchaTheme;

  /**
   * Optional. The type of CAPTCHA to serve.
   * Accepted values: "audio", "image"
   * @default "image"
   */
  type?: ReCaptchaType;

  /**
   * Optional. The size of the widget.
   * Accepted values: "compact", "normal", "invisible".
   * @default "compact"
   */
  size?: ReCaptchaSize;

  /**
   * Optional. The tabindex of the widget and challenge.
   * If other elements in your page use tabindex, it should be set to make user navigation easier.
   */
  tabindex?: number;

  /**
   * Optional. The badge location for g-recaptcha with size of "invisible".
   *
   * @default "bottomright"
   */
  badge?: ReCaptchaBadge;

  /**
   * Optional. Your callback function that's executed when the recaptcha response expires
   * and the user needs to solve a new CAPTCHA.
   */
  'expired-callback'?: Function;

  /**
   * Optional. Your callback function that's executed when the user submits a successful CAPTCHA response.
   * The user's response, g-recaptcha-response, will be the input for your callback function.
   */
  callback?(response: string): void;
}
