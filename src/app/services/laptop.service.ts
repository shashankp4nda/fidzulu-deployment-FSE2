import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../models/laptop.model';
@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  laptops: Laptop[]= [];
  private laptopUrl="";
  private url="";

  getLaptops(): Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.url);
  }

  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.laptopUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
