import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FoodService } from './food.service';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/food.model';

describe('FoodService', () => {
  let foodService: FoodService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService],
    });

    foodService = TestBed.inject(FoodService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(foodService).toBeTruthy();
  });

  it('should fetch foods from the server', () => {
    const mockFoods = [
      new Food(1, 'Food 1', 'url1', 'Brand 1', '100g', 250, 4.5, 3.99),
      new Food(2, 'Food 2', 'url2', 'Brand 2', '150g', 180, 4.0, 2.99),
    ];

    foodService.getFoods().subscribe((foods) => {
      expect(foods).toEqual(mockFoods);
    });
// put mid tier url here
    const req = httpTestingController.expectOne('');
    expect(req.request.method).toBe('GET');
    req.flush(mockFoods);

    httpTestingController.verify();
  });

  it('should update the URL based on selected country', () => {
    const selectedCountry = 'USA';
    const expectedUrl = foodService.foodUrl + selectedCountry;

    foodService.processSelectedCountry(selectedCountry);

    expect(foodService.url).toBe(expectedUrl);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
