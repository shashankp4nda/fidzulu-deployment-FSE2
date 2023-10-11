import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';

import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import {CarouselModule} from 'primeng/carousel';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    SplitterModule,
    CarouselModule,
    BrowserModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    MenubarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
