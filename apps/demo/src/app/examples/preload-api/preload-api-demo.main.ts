import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { DemoModule } from './preload-api-demo.module';

enableProdMode();
platformBrowser().bootstrapModule(DemoModule);
