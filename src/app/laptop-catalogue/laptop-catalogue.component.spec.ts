import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCatalogueComponent } from './laptop-catalogue.component';
import { Laptop } from '../models/laptop.model';
import { of } from 'rxjs';
import { LaptopService } from '../services/laptop.service';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CatalogueComponent } from '../catalogue/catalogue.component';

describe('LaptopCatalogueComponent', () => {
  let component: LaptopCatalogueComponent;
  let fixture: ComponentFixture<LaptopCatalogueComponent>;
  let mockLaptopService:any = jasmine.createSpyObj('LaptopService',['getLaptops']);
  const testLaptops: Laptop[] = [
    {
      id: 2345,
      url: "website.com",
      rating: 4.5,
      product: "ThinkPad T430s",
      brand: "Lenovo",
      CPU: "core i5-3320",
      memory: "8GB",
      price: 325.09
    }
  ];
  mockLaptopService.getLaptops.and.returnValue(of(testLaptops));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopCatalogueComponent, CatalogueComponent ],
      providers: [{
        provide: LaptopService,
        useValue: mockLaptopService

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

    fixture = TestBed.createComponent(LaptopCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should get laptops from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.laptops).toEqual(testLaptops);
  });
});
