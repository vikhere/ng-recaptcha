// tslint:disable no-require-imports no-submodule-imports
import { PageSettings } from '../../demo-wrapper/demo-wrapper.component';
declare var require: any;

export const settings: PageSettings = {
  feature: 'global-config',
  title: 'Global Config Example',
  content: {
    component: require('!highlight-loader?raw=true&lang=ts!./global-config-demo.component.ts'),
    html: require('!highlight-loader?raw=true&lang=html!./global-config-demo.component.html'),
    module: require('!highlight-loader?raw=true&lang=ts!./global-config-demo.module.ts'),
  },
};
