import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../../app-routing/app-routing.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        MenubarModule,
        AppRoutingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  
  it('should render a logo image', () => {
    const logoImg = debugElement.query(By.css('.logo-img'));
    expect(logoImg.nativeElement).toBeTruthy();
  });

  it('should render the p-menubar', () => {
    const pMenubar = debugElement.query(By.css('p-menubar'));
    expect(pMenubar.nativeElement).toBeTruthy();
  });

  it('should render menu items', () => {
    component.items = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'About', icon: 'pi pi-info-circle' },
      { label: 'Catalogue', icon: 'pi pi-shopping-cart' },
      { label: 'Contact', icon: 'pi pi-phone' },
    ];

    fixture.detectChanges(); // Trigger change detection to render the menu items.

    const menuItems = debugElement.queryAll(By.css('.p-menuitem'));
    expect(menuItems).toBeTruthy(); // Check if menu items are found.

  
    menuItems.forEach((menuItem: DebugElement, index: number) => {
      const menuItemText = menuItem.query(By.css('.p-menuitem-text'));
      expect(menuItemText.nativeElement.textContent).toContain(component.items[index].label);
    });
  });
});
