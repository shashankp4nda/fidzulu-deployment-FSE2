import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]= [];
  private bookUrl="";
  private url="";

  getBooks(): Observable<Book[]>{
   
    return this.http.get<Book[]>(this.url);
  }
  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.bookUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
