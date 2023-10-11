import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeService } from '../services/bike.service';
import { CatalogueComponent } from './catalogue.component';
import { DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(async () => {
    let mockBikeService:any = jasmine.createSpyObj('BikeService',['getBikes']);
    await TestBed.configureTestingModule({
      declarations: [ CatalogueComponent ],
      providers: [{
        provide: BikeService,
        useValue: mockBikeService

    }],
    imports: [
      DataViewModule,
      RatingModule,
      MenubarModule
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
