import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-catalogue',
  templateUrl: './book-catalogue.component.html',
  styleUrls: ['./book-catalogue.component.css']
})
export class BookCatalogueComponent {

  public books: Book[] = [];

  constructor(private bookService: BookService){}

  getBooks(){
    this.bookService.getBooks().subscribe(data => this.books = data);
  }
}
