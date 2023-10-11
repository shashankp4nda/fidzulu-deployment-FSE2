import { Component } from '@angular/core';
import { Laptop } from '../models/laptop.model';
import { LaptopService } from '../services/laptop.service';

@Component({
  selector: 'app-laptop-catalogue',
  templateUrl: './laptop-catalogue.component.html',
  styleUrls: ['./laptop-catalogue.component.css']
})
export class LaptopCatalogueComponent {

  public laptops: Laptop[] = [];

  constructor(private laptopService: LaptopService){}

  getBooks(){
    this.laptopService.getLaptops().subscribe(data => this.laptops = data);
  }
}
