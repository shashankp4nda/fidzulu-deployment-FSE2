import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';

import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    SplitterModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
