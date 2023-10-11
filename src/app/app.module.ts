import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';

import { SplitterModule } from 'primeng/splitter'

import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CatalogueComponent,
  ],
  imports: [
    BrowserModule,
    SplitterModule,
    FormsModule,
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
