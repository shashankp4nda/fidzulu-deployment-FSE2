import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../models/laptop.model';
@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  laptops: Laptop[]= [];
  private foodUrl="";

  getLaptops(): Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.foodUrl);
  }

  constructor(private http: HttpClient) { }
}
