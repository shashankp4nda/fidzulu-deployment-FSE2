import { Component, OnInit } from '@angular/core';
import { Bike } from '../models/bike.model';
import { MenuItem } from 'primeng/api';
import { BikeService } from '../services/bike.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {label: 'Bikes', routerLink:'/bike-catalogue'},
        {label: 'Books', routerLink:'/book-catalogue'},
        {label: 'DVDs', routerLink:'/dvd-catalogue'},
        {label: 'Food', routerLink:'/food-catalogue'},
        {label: 'Laptops', routerLink:'/laptop-catalogue'},
        {label: 'Toys', routerLink:'/toy-catalogue'}
      ];
    }

}
