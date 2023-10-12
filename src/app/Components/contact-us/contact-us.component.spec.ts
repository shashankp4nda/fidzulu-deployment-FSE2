import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import { SplitterModule } from 'primeng/splitter';
import { By } from '@angular/platform-browser';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsComponent],
      imports: [
        SplitterModule
      ]
    });
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "Contact Us"', () => {
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent).toContain('Contact Us');
  });

  it('should display the correct email id', () => {
    const emailValue = fixture.debugElement.query(By.css('ul li:nth-child(1)')).nativeElement;
    expect(emailValue.textContent).toContain('contact@fmr.com');
  });

  it('should display the correct phone number', () => {
    const phoneValue = fixture.debugElement.query(By.css('ul li:nth-child(2)')).nativeElement;
    expect(phoneValue.textContent).toContain('123-456-7890');
  })

  it('should display the correct address', () => {
    const addressValue = fixture.debugElement.query(By.css('ul li:nth-child(3)')).nativeElement;
    expect(addressValue.textContent).toContain('245 Summer Street, Boston, MA');
  })

  it('should display the correct website link', () => {
    const websiteValue = fixture.debugElement.query(By.css('ul li:nth-child(4)')).nativeElement;
    expect(websiteValue.textContent).toContain('www.fidelityinvestments.com');
  })

  it('should display the correct facebook link', () => {
    const facebookValue = fixture.debugElement.query(By.css('ul li:nth-child(5)')).nativeElement;
    expect(facebookValue.textContent).toContain('Fidelity-Investments');
  })

  it('should display the correct linkedin link', () => {
    const linkedinValue = fixture.debugElement.query(By.css('ul li:nth-child(6)')).nativeElement;
    expect(linkedinValue.textContent).toContain('Fidelity-Investments');
  })

  it('should display the correct instagram link', () => {
    const instagramValue = fixture.debugElement.query(By.css('ul li:nth-child(7)')).nativeElement;
    expect(instagramValue.textContent).toContain('Fidelity-Investments');
  })

});
