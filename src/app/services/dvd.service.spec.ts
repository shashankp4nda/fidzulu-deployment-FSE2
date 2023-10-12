import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DvdService } from './dvd.service';
import { HttpClient } from '@angular/common/http';
import { Dvd } from '../models/dvd.model';

describe('DvdService', () => {
  let dvdService: DvdService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DvdService],
    });

    dvdService = TestBed.inject(DvdService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(dvdService).toBeTruthy();
  });

  it('should fetch DVDs from the server', () => {
    const mockDvds = [
      new Dvd(1, 'DVD 1', 'url1', 'Rating 1', 'Studio 1', 120, 4.5, 9.99),
      new Dvd(2, 'DVD 2', 'url2', 'Rating 2', 'Studio 2', 90, 4.0, 7.99),
    ];

    dvdService.getDvds().subscribe((dvds) => {
      expect(dvds).toEqual(mockDvds);
    });

    const req = httpTestingController.expectOne('');
    expect(req.request.method).toBe('GET');
    req.flush(mockDvds);

    httpTestingController.verify();
  });

  it('should update the URL based on selected country', () => {
    const selectedCountry = 'USA';
    const expectedUrl = dvdService.dvdUrl + selectedCountry;

    dvdService.processSelectedCountry(selectedCountry);

    expect(dvdService.url).toBe(expectedUrl);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
