import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[]= [];
  private foodUrl="http://localhost:3021/food/all/IN";

  getFoods(): Observable<Food[]>{
    console.log("In good service function");
    
    return this.http.get<Food[]>(this.foodUrl);
    
  }

  constructor(private http: HttpClient) { }
}
