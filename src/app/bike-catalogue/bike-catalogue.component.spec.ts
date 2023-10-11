import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCatalogueComponent } from './bike-catalogue.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { BikeService } from '../services/bike.service';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { Bike } from '../models/bike.model';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

describe('BikeCatalogueComponent', () => {
  let mockBikeService:any = jasmine.createSpyObj('BikeService',['getBikes']);
  let component: BikeCatalogueComponent;
  let fixture: ComponentFixture<BikeCatalogueComponent>;
  const testBikes: Bike[] = [];
  mockBikeService.getBikes.and.returnValue(of(testBikes));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeCatalogueComponent, CatalogueComponent ],
      providers: [{
        provide: BikeService,
        useValue: mockBikeService

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

    fixture = TestBed.createComponent(BikeCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
