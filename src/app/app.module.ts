import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import {CarouselModule} from 'primeng/carousel';

import { ContactUsComponent } from './Components/contact-us/contact-us.component';

import { SplitterModule } from 'primeng/splitter'

import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogueComponent,
    ContactUsComponent,
    CatalogueComponent,
    LandingPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    SplitterModule,
    CarouselModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    AppRoutingModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
