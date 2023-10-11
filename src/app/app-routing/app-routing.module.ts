import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../Components/landing-page/landing-page.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ContactUsComponent } from '../Components/contact-us/contact-us.component';
import { DvdCatalogueComponent } from '../dvd-catalogue/dvd-catalogue.component';
import { BikeCatalogueComponent } from '../bike-catalogue/bike-catalogue.component';
import { BookCatalogueComponent } from '../book-catalogue/book-catalogue.component';
import { FoodCatalogueComponent } from '../food-catalogue/food-catalogue.component';
import { LaptopCatalogueComponent } from '../laptop-catalogue/laptop-catalogue.component';
import { ToyCatalogueComponent } from '../toy-catalogue/toy-catalogue.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'bike-catalogue', component: BikeCatalogueComponent },
  { path: 'book-catalogue', component: BookCatalogueComponent },
  { path: 'dvd-catalogue', component: DvdCatalogueComponent },
  { path: 'food-catalogue', component: FoodCatalogueComponent },
  { path: 'laptop-catalogue', component: LaptopCatalogueComponent },
  { path: 'toy-catalogue', component: ToyCatalogueComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

