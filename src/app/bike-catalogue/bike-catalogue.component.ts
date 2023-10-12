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
    this.getBikes();
  }

  public bikes: Bike[] = [];
  errorMessage: string = "";
  constructor(private bikeService: BikeService){}

  // bikes: Bike[] = [
  //   {
  //     id: 1234,
  //     name: "Mamba Sport Bike",
  //     image: "https://m.media-amazon.com/images/I/51D9YY8bYBL._AC_SX679_.jpg",
  //     brand: "Mamba Bikes",
  //     color: "black",
  //     price: 75.88,
  //     rating: 5
  //   },
  //   {
  //     id: 1235,
  //     name: "DJ Fat Bike 500W",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ5hdf1bdXdcbTkjUewD8tAZh2pYjhSx56bseNZ88lsQ5E3X-xQOxW6w3heXOiFX-FFo&usqp=CAU",
  //     brand: "DJ Bikes",
  //     color: "grey",
  //     price: 1599.86,
  //     rating: 3
  //   }
  // ];

  
  getBikes(){
    this.bikeService.getBikes().subscribe({ next : (data) => 
      { 
        this.bikes = data; 
        this.errorMessage = '';
      }, 
        error: (e) => this.errorMessage = e });
      console.log(this.errorMessage);
  }

  
}
