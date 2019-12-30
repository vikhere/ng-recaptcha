// tslint:disable no-require-imports no-submodule-imports
import { PageSettings } from '../../demo-wrapper/demo-wrapper.component';
declare var require: any;

export const settings: PageSettings = {
  feature: 'basic',
  title: 'Basic Example',
  content: {
    component: require('!highlight-loader?raw=true&lang=ts!./basic-demo.component.ts'),
    html: require('!highlight-loader?raw=true&lang=html!./basic-demo.component.html'),
    module: require('!highlight-loader?raw=true&lang=ts!./basic-demo.module.ts'),
  },
};
