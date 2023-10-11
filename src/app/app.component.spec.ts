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

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarMockComponent,
        LandingPageComponent,
        mockCatalogueComponent,
        MockContactUsComponent
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
