// tslint:disable no-require-imports no-submodule-imports
import { PageSettings } from '../../demo-wrapper/demo-wrapper.component';
declare var require: any;

export const settings: PageSettings = {
  feature: 'language',
  title: 'Language Example',
  content: {
    component: require('!highlight-loader?raw=true&lang=ts!./language-demo.component.ts'),
    html: require('!highlight-loader?raw=true&lang=html!./language-demo.component.html'),
    module: require('!highlight-loader?raw=true&lang=ts!./language-demo.module.ts'),
  },
};
