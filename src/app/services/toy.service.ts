import { Injectable } from '@angular/core';
import { Toy } from '../models/toy.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DropDownService } from './drop-down.service';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  toys: Toy[]= [];
  public toyUrl="http://54.90.86.99:3021/toys/all/IN";
  public url="";

  getToys(): Observable<Toy[]>{
    this.url =  this.toyUrl + this.dropDownService.getSelectedValue();
    console.log(this.url);
    return this.http.get<Toy[]>(this.toyUrl).pipe(catchError(this.handleError));
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

  // processSelectedCountry(selectedCountry: string) {
  //   this.url =  this.toyUrl + selectedCountry;
  //   console.log(`Selected value is: ${this.url}`);
  // }
 
}
