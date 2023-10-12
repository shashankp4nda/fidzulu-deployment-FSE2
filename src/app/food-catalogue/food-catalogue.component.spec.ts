import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatalogueComponent } from './food-catalogue.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { FoodService } from '../services/food.service';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { Food } from '../models/food.model';
import { of } from 'rxjs';

describe('FoodCatalogueComponent', () => {
  let mockFoodService:any = jasmine.createSpyObj('FoodService',['getFoods']);
  let component: FoodCatalogueComponent;
  let fixture: ComponentFixture<FoodCatalogueComponent>;
  const mockFoods: Food[] = [{
    id: 1,
    name: "chicken",
    url: "random-url",
    brand: "kfc",
    weight: "40kg",
    calories: 670,
    price: 500,
    rating: 5
  }];
  mockFoodService.getFoods.and.returnValue(of(mockFoods));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCatalogueComponent, CatalogueComponent ],
      providers: [{
        provide: FoodService,
        useValue: mockFoodService

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

    fixture = TestBed.createComponent(FoodCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get books from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.foods).toEqual(mockFoods);
  });
});
