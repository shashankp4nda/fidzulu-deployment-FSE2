import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@Component({
  selector: "app-navbar",
  template: ''
})

class NavbarMockComponent {
}


@Component({
  selector: 'app-catalogue',
  template: ''
})
export class mockCatalogueComponent {

}


@Component({
  selector: 'app-contact-us',
  template: ''
})
export class MockContactUsComponent {

}

@Component({
  selector: 'app-dvd-catalogue',
  template: ''
})
export class MockDvdCatalogueComponent {

}

@Component({
  selector: 'app-food-catalogue',
  template: ''
})
export class MockFoodCatalogueComponent {

}

@Component({
  selector: 'app-toy-catalogue',
  template: ''
})
export class MockToyCatalogueComponent {

}
@Component({
  selector: 'app-bike-catalogue',
  template: ''
})
export class MockBikeCatalogueComponent {

}
@Component({
  selector: 'app-laptop-catalogue',
  template: ''
})
export class MockLaptopCatalogueComponent {

}
@Component({
  selector: 'app-book-catalogue',
  template: ''
})
export class MockBookCatalogueComponent {

}
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarMockComponent,
        LandingPageComponent,
        mockCatalogueComponent,
        MockContactUsComponent,
        MockDvdCatalogueComponent,
        MockFoodCatalogueComponent,
        MockLaptopCatalogueComponent,
        MockBookCatalogueComponent,
        MockBikeCatalogueComponent,
        MockToyCatalogueComponent

      ],
      imports: [
        AppRoutingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fidzulu'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fidzulu');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('app-landing-page')?.textContent).toContain('Hello World');
  // });
  

});
