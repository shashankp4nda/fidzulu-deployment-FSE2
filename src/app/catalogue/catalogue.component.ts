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

  displayBikes: boolean = false;
  displayBooks: boolean = false;
  displayDvds: boolean = false;
  displayFoods: boolean = false;
  displayLaptops: boolean = false;
  displayToys: boolean = false;

  items: MenuItem[] = [];
  public bikes: Bike[] = [];

  constructor(private bikeService: BikeService){}

  ngOnInit() {
    this.items = [
        {label: 'Bikes', routerLink:''},
        {label: 'Books', routerLink:''},
        {label: 'DVDs', routerLink:''},
        {label: 'Food', routerLink:''},
        {label: 'Laptops', routerLink:''},
        {label: 'Toys', routerLink:''}
      ];
    }

  // bikes: Bike[] = [
  //   {
  //     id: 1234,
  //     name: "Mamba Sport Bike",
  //     brand: "Mamba Bikes",
  //     color: "black",
  //     price: 75.88,
  //     rating: 5
  //   },
  //   {
  //     id: 1235,
  //     name: "DJ Fat Bike 500W",
  //     brand: "DJ Bikes",
  //     color: "grey",
  //     price: 1599.86,
  //     rating: 3
  //   }
  // ];

  // getBikes(){
  //   this.bikeService.getBikes().subscribe(data => this.bikes = data);
  // }
}
