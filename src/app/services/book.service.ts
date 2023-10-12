import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from '../models/book.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DropDownService } from './drop-down.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]= [];
  private bookUrl="http://54.90.86.99:3021/books/all/";
  private url="";

  getBooks(): Observable<Book[]>{
    this.url =  this.bookUrl + this.dropDownService.getSelectedValue();
    return this.http.get<Book[]>(this.url).pipe(catchError(this.handleError));
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
    this.url =  this.bookUrl + this.dropDownService.getSelectedValue();
    console.log(`Selected value is: ${this.url}`);
  }
}
