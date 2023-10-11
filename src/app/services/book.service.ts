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

  getBooks(): Observable<Book[]>{
   
    return this.http.get<Book[]>(this.bookUrl);
  }
  constructor(private http: HttpClient) { }
}
