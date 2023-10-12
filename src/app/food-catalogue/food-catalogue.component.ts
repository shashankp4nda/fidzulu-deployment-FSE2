import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent implements OnInit {

  ngOnInit(): void {
    this.getFoods();
  }
  public foods: Food[] = [];

  constructor(private foodService: FoodService){}

  getFoods(){
    this.foodService.getFoods().subscribe(data => this.foods = data);
    
  }
}
