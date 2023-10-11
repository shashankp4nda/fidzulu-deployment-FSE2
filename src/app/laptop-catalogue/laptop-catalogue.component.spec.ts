import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCatalogueComponent } from './laptop-catalogue.component';

describe('LaptopCatalogueComponent', () => {
  let component: LaptopCatalogueComponent;
  let fixture: ComponentFixture<LaptopCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
