import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeService } from '../services/bike.service';
import { CatalogueComponent } from './catalogue.component';
import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ToyService } from '../services/toy.service';
import { LaptopService } from '../services/laptop.service';
import { DvdService } from '../services/dvd.service';
import { FoodService } from '../services/food.service';
import { BookService } from '../services/book.service';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(async () => {
    let mockBikeService:any = jasmine.createSpyObj('BikeService',['getBikes']);
    let mockBookService:any = jasmine.createSpyObj('BookService',['getBooks']);
    let mockFoodService:any = jasmine.createSpyObj('FoodService',['getFoods']);
    let mockToyService:any = jasmine.createSpyObj('ToyService',['getToys']);
    let mockLaptopService:any = jasmine.createSpyObj('LaptopService',['getLaptops']);
    let mockDvdService:any = jasmine.createSpyObj('DvdService',['getDvds']);
    await TestBed.configureTestingModule({
      declarations: [ CatalogueComponent ],
      providers: [{
        provide: BikeService,
        useValue: mockBikeService

    },
    {
      provide: ToyService,
      useValue: mockToyService

  },
  {
    provide: LaptopService,
    useValue: mockLaptopService

},
{
  provide: DvdService,
  useValue: mockDvdService

},
{
  provide: BookService,
  useValue: mockBookService

},
{
  provide: FoodService,
  useValue: mockFoodService

},
{
  provide: BikeService,
  useValue: mockBikeService

}
  ],
    imports: [
      DataViewModule,
      RatingModule,
      MenubarModule,
      AppRoutingModule,
      FormsModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a navbar', () => {
    const navbarElement: HTMLElement = fixture.nativeElement;
    expect(navbarElement.querySelector('.p-menubar')).toBeTruthy();
  });
});
