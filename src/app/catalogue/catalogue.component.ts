import { Component, OnInit } from '@angular/core';
import { Bike } from '../models/bike.model';
import { MenuItem } from 'primeng/api';
import { BikeService } from '../services/bike.service';
import { BookService } from '../services/book.service';
import { DvdService } from '../services/dvd.service';
import { ToyService } from '../services/toy.service';
import { FoodService } from '../services/food.service';
import { LaptopService } from '../services/laptop.service';
import { DropDownService } from '../services/drop-down.service';

// interface Country {
//   name: string;
//   code: string;
// }

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  items: MenuItem[] = [];
  selectedCountry: string = "";
  code: string = "";

  ngOnInit() {
    this.items = [
        {label: 'Bikes', routerLink:'/bike-catalogue'},
        {label: 'Books', routerLink:'/book-catalogue'},
        {label: 'DVDs', routerLink:'/dvd-catalogue'},
        {label: 'Food', routerLink:'/food-catalogue'},
        {label: 'Laptops', routerLink:'/laptop-catalogue'},
        {label: 'Toys', routerLink:'/toy-catalogue'}
      ];
      this.selectedCountry = this.dropDownService.getSelectedValue();
    }

    constructor(private bikeService: BikeService, private laptopService: LaptopService,
      private bookService: BookService, private dvdService: DvdService,
      private foodService: FoodService, private toyService: ToyService,
      private dropDownService: DropDownService){}

    onDropdownChange() {
      if(this.selectedCountry==='India')
        this.code = 'IN';
      else if(this.selectedCountry==='Ireland')
        this.code = 'IE';
      else
        this.code = 'US-NC'
      this.dropDownService.setSelectedValue(this.selectedCountry);
      this.bikeService.processSelectedCountry(this.code);
      this.bookService.processSelectedCountry(this.code);
      this.dvdService.processSelectedCountry(this.code);
      this.foodService.processSelectedCountry(this.code);
      this.toyService.processSelectedCountry(this.code);
      this.laptopService.processSelectedCountry(this.code);
      
    }

}
