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

describe('ToyCatalogueComponent', () => {
  let mockToyService:any = jasmine.createSpyObj('ToyService',['getToys']);
  let component: ToyCatalogueComponent;
  let fixture: ComponentFixture<ToyCatalogueComponent>;
  const testToys: Toy[] = [];
  mockToyService.getToys.and.returnValue(of(testToys));

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
      FormsModule
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
});
