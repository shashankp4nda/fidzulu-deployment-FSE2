import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdCatalogueComponent } from './dvd-catalogue.component';

describe('DvdCatalogueComponent', () => {
  let component: DvdCatalogueComponent;
  let fixture: ComponentFixture<DvdCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvdCatalogueComponent ]
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
