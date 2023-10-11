import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LandingPageComponent', () => {
  let fixture: ComponentFixture<LandingPageComponent>;
  let component: LandingPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
  });

  it('should create the LandingPageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "Welcome to FidZulu" heading', () => {
    const heading = fixture.debugElement.query(By.css('#landing-info-heading h1'));
    expect(heading.nativeElement.textContent).toContain('Welcome to FidZulu');
  });

  it('should display the "Shop now!" button with a router link', () => {
    const shopNowButton = fixture.debugElement.query(By.css('#shopnow'));
    const routerLink = shopNowButton.attributes['routerLink'];

    expect(shopNowButton.nativeElement.textContent).toContain('Shop now!');
    expect(routerLink).toBe('catalogue');
  });

  it('should display content about "Bikes, Books and more!!"', () => {
    const catalogueDesc = fixture.debugElement.query(By.css('#catalogue-desc'));
    expect(catalogueDesc.nativeElement.textContent).toContain('Bikes, Books and more!!');
  });
});
