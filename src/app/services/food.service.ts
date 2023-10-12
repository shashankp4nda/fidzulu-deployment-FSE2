import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[]= [];
  public foodUrl="http://localhost:3021/food/all/";
  public url="";

  getFoods(): Observable<Food[]>{
    console.log("In food service function");
    
    return this.http.get<Food[]>(this.url);
    
  }

  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.foodUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
