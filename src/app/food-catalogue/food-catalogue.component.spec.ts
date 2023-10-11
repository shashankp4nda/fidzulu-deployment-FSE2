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
  const testFoods: Food[] = [];
  mockFoodService.getFoods.and.returnValue(of(testFoods));
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
});
