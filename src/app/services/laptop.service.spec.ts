import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { LaptopService } from './laptop.service';

describe('LaptopService', () => {
  let service: LaptopService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LaptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
