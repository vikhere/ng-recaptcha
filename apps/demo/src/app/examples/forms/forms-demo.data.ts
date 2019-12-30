// tslint:disable no-require-imports no-submodule-imports
import { PageSettings } from '../../demo-wrapper/demo-wrapper.component';
declare var require: any;

export const settings: PageSettings = {
  feature: 'forms',
  title: 'Forms Example',
  content: {
    component: require('!highlight-loader?raw=true&lang=ts!./forms-demo.component.ts'),
    html: require('!highlight-loader?raw=true&lang=html!./forms-demo.component.html'),
    module: require('!highlight-loader?raw=true&lang=ts!./forms-demo.module.ts'),
  },
};
