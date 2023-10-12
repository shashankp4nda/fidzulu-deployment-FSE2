import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bikes: Bike[]= [];
  private bikeUrl="http://localhost:3021/bikes/all/";
  private url="";
  filter: string | undefined;

  getBikes(): Observable<Bike[]>{
    // return of(this.bikes);
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

  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.bikeUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }

}
