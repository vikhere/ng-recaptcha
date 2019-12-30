import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { DemoModule } from './invisible-demo.module';

enableProdMode();
platformBrowser().bootstrapModule(DemoModule);
