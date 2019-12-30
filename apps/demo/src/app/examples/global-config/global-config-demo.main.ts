import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { DemoModule } from './global-config-demo.module';

enableProdMode();
platformBrowser().bootstrapModule(DemoModule);
