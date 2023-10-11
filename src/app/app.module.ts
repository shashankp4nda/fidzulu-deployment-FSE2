import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { BikeCatalogueComponent } from './bike-catalogue/bike-catalogue.component';
import { BookCatalogueComponent } from './book-catalogue/book-catalogue.component';
import { DvdCatalogueComponent } from './dvd-catalogue/dvd-catalogue.component';
import { FoodCatalogueComponent } from './food-catalogue/food-catalogue.component';
import { LaptopCatalogueComponent } from './laptop-catalogue/laptop-catalogue.component';
import { ToyCatalogueComponent } from './toy-catalogue/toy-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    BikeCatalogueComponent,
    BookCatalogueComponent,
    DvdCatalogueComponent,
    FoodCatalogueComponent,
    LaptopCatalogueComponent,
    ToyCatalogueComponent
  ],
  imports: [
    BrowserModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
