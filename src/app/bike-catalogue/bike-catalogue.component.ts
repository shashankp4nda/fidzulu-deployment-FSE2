import { Component, OnInit } from '@angular/core';
import { Bike } from '../models/bike.model';
import { BikeService } from '../services/bike.service';

@Component({
  selector: 'app-bike-catalogue',
  templateUrl: './bike-catalogue.component.html',
  styleUrls: ['./bike-catalogue.component.css']
})
export class BikeCatalogueComponent implements OnInit{

  ngOnInit(): void {
    //this.getBikes();
    this.getUrl(this.filter);
  }

  // public bikes: Bike[] = [];

  constructor(private bikeService: BikeService){}

  bikes: Bike[] = [
    {
      id: 1234,
      name: "Mamba Sport Bike",
      brand: "Mamba Bikes",
      color: "black",
      price: 75.88,
      rating: 5
    },
    {
      id: 1235,
      name: "DJ Fat Bike 500W",
      brand: "DJ Bikes",
      color: "grey",
      price: 1599.86,
      rating: 3
    }
  ];

  filter: string = "";
  /*getBikes(){
    this.bikeService.getBikes(this.filter).subscribe(data => this.bikes = data);
  }
*/
  getUrl(filter:string) {
    this.bikeService.checkUrl(filter);
  }

}
