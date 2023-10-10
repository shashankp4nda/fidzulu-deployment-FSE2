import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
