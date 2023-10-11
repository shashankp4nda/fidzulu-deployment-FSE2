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
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    FormsModule,
    InputTextModule,
    CardModule,
    AppRoutingModule,
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
