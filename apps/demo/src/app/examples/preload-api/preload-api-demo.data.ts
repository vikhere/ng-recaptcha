// tslint:disable no-require-imports no-submodule-imports
import { PageSettings } from '../../demo-wrapper/demo-wrapper.component';
declare var require: any;

export const settings: PageSettings = {
  feature: 'preload-api',
  title: 'Preloaded reCAPTCHA API Example',
  content: {
    component: require('!highlight-loader?raw=true&lang=ts!./preload-api-demo.component.ts'),
    html: require('!highlight-loader?raw=true&lang=html!./preload-api-demo.component.html'),
    module: require('!highlight-loader?raw=true&lang=ts!./preload-api-demo.module.ts'),
    additional: {
      content: require('!highlight-loader?raw=true&lang=ts!./preload-api-demo.head.ts'),
      title: 'script.ts',
      type: 'ts',
    },
  },
};
