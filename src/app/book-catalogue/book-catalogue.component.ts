import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-catalogue',
  templateUrl: './book-catalogue.component.html',
  styleUrls: ['./book-catalogue.component.css']
})
export class BookCatalogueComponent implements OnInit{

  public books: Book[] = [];
  ngOnInit(): void {
      this.getBooks();
  }

  constructor(private bookService: BookService){}

  getBooks(){
    this.bookService.getBooks().subscribe(data => this.books = data);
  }
}
