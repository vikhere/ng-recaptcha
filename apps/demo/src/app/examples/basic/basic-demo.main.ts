import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { DemoModule } from './basic-demo.module';

enableProdMode();
platformBrowser().bootstrapModule(DemoModule);
