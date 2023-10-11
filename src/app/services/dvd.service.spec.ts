import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { DvdService } from './dvd.service';

describe('DvdService', () => {
  let service: DvdService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DvdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
