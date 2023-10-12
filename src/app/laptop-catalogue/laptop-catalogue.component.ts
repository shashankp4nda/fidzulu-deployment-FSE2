import { Component, OnInit } from '@angular/core';
import { Laptop } from '../models/laptop.model';
import { LaptopService } from '../services/laptop.service';

@Component({
  selector: 'app-laptop-catalogue',
  templateUrl: './laptop-catalogue.component.html',
  styleUrls: ['./laptop-catalogue.component.css']
})
export class LaptopCatalogueComponent implements OnInit{
  errorMessage: string = "";
  public laptops: Laptop[] = [];
  ngOnInit(): void {
      this.getLaptops();
  }
  constructor(private laptopService: LaptopService){}

  getLaptops(){
    // this.laptopService.getLaptops().subscribe(data => this.laptops = data);
    this.laptopService.getLaptops().subscribe({next: (data) => {
        this.laptops = data; 
        this.errorMessage = '';
      }, 
      error: (e) => this.errorMessage = e
    })
  }
}
