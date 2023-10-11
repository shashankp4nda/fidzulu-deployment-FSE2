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

describe('BookCatalogueComponent', () => {
  let mockBookService:any = jasmine.createSpyObj('BookService',['getBooks']);
  let component: BookCatalogueComponent;
  let fixture: ComponentFixture<BookCatalogueComponent>;
  const testBooks: Book[] = [];
  mockBookService.getBooks.and.returnValue(of(testBooks));
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
      FormsModule
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
});
