import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyCatalogueComponent } from './toy-catalogue.component';
import { of } from 'rxjs';
import { Toy } from '../models/toy.model';
import { ToyService } from '../services/toy.service';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';

describe('ToyCatalogueComponent', () => {
  let mockToyService:any = jasmine.createSpyObj('ToyService',['getToys']);
  let component: ToyCatalogueComponent;
  let fixture: ComponentFixture<ToyCatalogueComponent>;
  const mockToys: Toy[] = [{
    id: 1234,
    name: "Soft toy",
    url: "random-url",
    brand: "hamleys",
    age_group: "13-14",
    price: 560.89,
    rating: 5
  }];
  mockToyService.getToys.and.returnValue(of(mockToys));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyCatalogueComponent, CatalogueComponent],
      providers: [{
        provide: ToyService,
        useValue: mockToyService

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

    fixture = TestBed.createComponent(ToyCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get toys from the service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.toys).toEqual(mockToys);
  });
});
