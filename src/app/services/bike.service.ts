import { Injectable, OnInit } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DropDownService } from './drop-down.service';

@Injectable({
  providedIn: 'root'
})
export class BikeService implements OnInit{
  ngOnInit(): void {
      //this.processSelectedCountry();
  }

  bikes: Bike[]= [];
  private bikeUrl="http://54.90.86.99:3021/bikes/all/";
  private url="";
  filter: string | undefined;

  getBikes(): Observable<Bike[]>{
    // return of(this.bikes);
    this.url =  this.bikeUrl + this.dropDownService.getSelectedValue();
    return this.http.get<Bike[]>(this.url).pipe(catchError(this.handleError));
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

  processSelectedCountry() {
    this.url =  this.bikeUrl + this.dropDownService.getSelectedValue();
    console.log(`Selected value is: ${this.url}`);
  }

}
