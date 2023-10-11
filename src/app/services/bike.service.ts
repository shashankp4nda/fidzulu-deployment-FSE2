import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bikes: Bike[]= [];
  private bikeUrl="";

  getBikes(): Observable<Bike[]>{
    // return of(this.bikes);
    return this.http.get<Bike[]>(this.bikeUrl);
  }

  constructor(private http: HttpClient) { }

}
