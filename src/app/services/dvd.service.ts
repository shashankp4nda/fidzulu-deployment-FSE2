import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { DropDownService } from './drop-down.service';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  dvd: Dvd[]= [];
  public dvdUrl="http://54.90.86.99:3021/dvds/all/";
  public url="";

  getDvds(): Observable<Dvd[]>{
    this.url =  this.dvdUrl + this.dropDownService.getSelectedValue();
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

  constructor(private http: HttpClient, private dropDownService: DropDownService) { }

  processSelectedCountry() {
    this.url =  this.dvdUrl + this.dropDownService.getSelectedValue();
    console.log(`Selected value is: ${this.url}`);
  }
}
