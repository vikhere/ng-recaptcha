// tslint:disable no-require-imports no-submodule-imports
import { PageSettings } from '../../demo-wrapper/demo-wrapper.component';
declare var require: any;

export const settings: PageSettings = {
  feature: 'invisible',
  title: 'Invisible reCAPTCHA API Example',
  content: {
    component: require('!highlight-loader?raw=true&lang=ts!./invisible-demo.component.ts'),
    html: require('!highlight-loader?raw=true&lang=html!./invisible-demo.component.html'),
    module: require('!highlight-loader?raw=true&lang=ts!./invisible-demo.module.ts'),
  },
};
