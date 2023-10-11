import { Component } from '@angular/core';
import { Bike } from '../models/bike.model';
import { BikeService } from '../services/bike.service';

@Component({
  selector: 'app-bike-catalogue',
  templateUrl: './bike-catalogue.component.html',
  styleUrls: ['./bike-catalogue.component.css']
})
export class BikeCatalogueComponent {

  public bikes: Bike[] = [];

  constructor(private bikeService: BikeService){}

  getBikes(){
    this.bikeService.getBikes().subscribe(data => this.bikes = data);
  }

}
