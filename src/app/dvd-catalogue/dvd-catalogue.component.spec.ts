import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdCatalogueComponent } from './dvd-catalogue.component';
import { DvdService } from '../services/dvd.service';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { MenubarModule } from 'primeng/menubar';
import { Dvd } from '../models/dvd.model';
import { of } from 'rxjs';

describe('DvdCatalogueComponent', () => {
  let mockDvdService:any = jasmine.createSpyObj('DvdService',['getDvds']);
  let component: DvdCatalogueComponent;
  let fixture: ComponentFixture<DvdCatalogueComponent>;
  const testDvds: Dvd[] = [];
  mockDvdService.getDvds.and.returnValue(of(testDvds));
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvdCatalogueComponent, CatalogueComponent],
      providers: [{
        provide: DvdService,
        useValue: mockDvdService

    }],
    imports: [
      DataViewModule,
      RatingModule,
      AppRoutingModule,
      FormsModule,
      MenubarModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvdCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
