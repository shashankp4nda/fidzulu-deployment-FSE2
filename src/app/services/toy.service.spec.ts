import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ToyService } from './toy.service';
import { HttpClient } from '@angular/common/http';
import { Toy } from '../models/toy.model';

describe('ToyService', () => {
  let service: ToyService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ToyService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ToyService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch laptops from the server', () => {
    const mockToys = [
      new Toy(1, 'Toy 1', 'url1', 'Brand 1', '3 - 6 years', 1000, 4.5),
      new Toy(2, 'Toy 2', 'url2', 'Brand 2', '4 - 8 years', 800, 4.0),
    ];

 

    service.getToys().subscribe((toys) => {
      expect(toys).toEqual(mockToys);
    });
// change to url from mid tier once we get
    const req = httpTestingController.expectOne('');
    expect(req.request.method).toBe('GET');
    req.flush(mockToys);

 

    httpTestingController.verify();
  });

 

  it('should update the URL based on selected country', () => {
    const selectedCountry = 'USA';
    const expectedUrl = service.toyUrl + selectedCountry;

 

    service.processSelectedCountry(selectedCountry);

 

    expect(service.url).toBe(expectedUrl);
  });

 

  afterEach(() => {
    httpTestingController.verify();
  });
});
