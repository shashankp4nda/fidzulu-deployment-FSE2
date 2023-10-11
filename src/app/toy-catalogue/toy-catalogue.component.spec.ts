import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyCatalogueComponent } from './toy-catalogue.component';

describe('ToyCatalogueComponent', () => {
  let component: ToyCatalogueComponent;
  let fixture: ComponentFixture<ToyCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyCatalogueComponent ]
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
