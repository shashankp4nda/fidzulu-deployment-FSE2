import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  dvd: Dvd[]= [];
  private dvdUrl="";
  private url="";

  getDvds(): Observable<Dvd[]>{
    return this.http.get<Dvd[]>(this.url).pipe(catchError(this.handleError));
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
    this.url =  this.dvdUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
