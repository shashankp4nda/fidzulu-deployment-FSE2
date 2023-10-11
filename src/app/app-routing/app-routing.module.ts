import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../Components/landing-page/landing-page.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ContactUsComponent } from '../Components/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'contact', component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

