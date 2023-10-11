import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../services/book.service';
import { BookCatalogueComponent } from './book-catalogue.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { CatalogueComponent } from '../catalogue/catalogue.component';

describe('BookCatalogueComponent', () => {
  let mockBookService:any = jasmine.createSpyObj('BookService',['getBooks']);
  let component: BookCatalogueComponent;
  let fixture: ComponentFixture<BookCatalogueComponent>;

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
      MenubarModule
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
