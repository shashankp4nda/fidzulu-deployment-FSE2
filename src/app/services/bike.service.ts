import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bikes: Bike[]= [];
  private bikeUrl="http://localhost:3021/bikes/all/";
  private url="";
  filter: string | undefined;

  getBikes(): Observable<Bike[]>{
    // return of(this.bikes);
    return this.http.get<Bike[]>(this.url);
  }

  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.bikeUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }

}
