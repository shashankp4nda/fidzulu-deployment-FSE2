import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';

import { SplitterModule } from 'primeng/splitter'


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    SplitterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
