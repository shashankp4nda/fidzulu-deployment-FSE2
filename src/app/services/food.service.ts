import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Food } from '../models/food.model';
import { DropDownService } from './drop-down.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[]= [];
  public foodUrl="http://54.90.86.99:3021/food/all/";
  public url="";

  getFoods(): Observable<Food[]>{
    this.url =  this.foodUrl + this.dropDownService.getSelectedValue();
    return this.http.get<Food[]>(this.url).pipe(catchError(this.handleError));
  }

  handleError(response: HttpErrorResponse) { 
    if (response.error instanceof ProgressEvent) { 
      console.error('A client-side or network error occurred; ' + 
      `${response.message} ${response.status} ${response.statusText}`); 
    } 
    else { 
      console.error(`Backend returned code ${response.status}, ` + 
      `body was: ${JSON.stringify(response.error)}`); 
    } 
    return throwError( () => 'Unable to contact service; please try again later.'); 
  }

  constructor(private http: HttpClient, private dropDownService: DropDownService) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.foodUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
