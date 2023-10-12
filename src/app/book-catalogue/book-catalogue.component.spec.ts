import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../services/book.service';
import { BookCatalogueComponent } from './book-catalogue.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { Book } from '../models/book.model';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('BookCatalogueComponent', () => {
  let mockBookService:any = jasmine.createSpyObj('BookService',['getBooks']);
  let component: BookCatalogueComponent;
  let fixture: ComponentFixture<BookCatalogueComponent>;
  const mockBooks: Book[] = [
    {
      id: 1,
      title: "Da Vinci Code",
      url: "random-url",
      author: "Dan Brown",
      price: 440.5,
      isbn: "123456h",
      publisher: "mega studio",
      rating: 5
    }
  ];
  mockBookService.getBooks.and.returnValue(of(mockBooks));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCatalogueComponent, CatalogueComponent ],
      providers: [{
        provide: BookService,
        useValue: mockBookService

    }],
    imports: [
      DataViewModule,
      RatingModule,
      MenubarModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get books from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.books).toEqual(mockBooks);
  });
});
