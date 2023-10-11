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
    { label: 'Home', icon: 'pi pi-home' , routerLink: '/'},
    { label: 'About', icon: 'pi pi-info-circle'},
    { label: 'Catalogue', icon: 'pi pi-shopping-cart', routerLink: '/catalogue' },
    { label: 'Contact', icon: 'pi pi-phone',  routerLink: '/contact'}
  ];

  ngOnInit(): void {
      
  }

}
