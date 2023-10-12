import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LaptopService } from './laptop.service';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../models/laptop.model';

describe('LaptopService', () => {
  let laptopService: LaptopService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LaptopService],
    });

    laptopService = TestBed.inject(LaptopService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(laptopService).toBeTruthy();
  });

  it('should fetch laptops from the server', () => {
    const mockLaptops = [
      new Laptop(1, 'Laptop 1', 'url1', 'Brand 1', 'CPU 1', 'Memory 1', 1000, 4.5),
      new Laptop(2, 'Laptop 2', 'url2', 'Brand 2', 'CPU 2', 'Memory 2', 800, 4.0),
    ];

    laptopService.getLaptops().subscribe((laptops) => {
      expect(laptops).toEqual(mockLaptops);
    });
// change to url from mid tier once we get
    const req = httpTestingController.expectOne('');
    expect(req.request.method).toBe('GET');
    req.flush(mockLaptops);

    httpTestingController.verify();
  });

  it('should update the URL based on selected country', () => {
    const selectedCountry = 'USA';
    const expectedUrl = laptopService.laptopUrl + selectedCountry;

    laptopService.processSelectedCountry(selectedCountry);

    expect(laptopService.url).toBe(expectedUrl);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
