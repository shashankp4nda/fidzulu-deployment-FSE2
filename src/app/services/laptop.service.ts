import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Laptop } from '../models/laptop.model';
@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  laptops: Laptop[]= [];
  private laptopUrl="";
  private url="";

  getLaptops(): Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.url).pipe(catchError(this.handleError));
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
    this.url =  this.laptopUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
