import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value:string = "";
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'About', icon: 'pi pi-info-circle'},
    { label: 'Catalogue', icon: 'pi pi-shopping-cart' },
    { label: 'Contact', icon: 'pi pi-phone'}
  ];

  ngOnInit(): void {
      
  }

}
