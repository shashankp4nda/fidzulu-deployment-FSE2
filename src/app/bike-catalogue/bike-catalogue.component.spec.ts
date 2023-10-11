import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCatalogueComponent } from './bike-catalogue.component';

describe('BikeCatalogueComponent', () => {
  let component: BikeCatalogueComponent;
  let fixture: ComponentFixture<BikeCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeCatalogueComponent ]
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
