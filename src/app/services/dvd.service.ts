import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  dvd: Dvd[]= [];
  public dvdUrl="";
  public url="";

  getDvds(): Observable<Dvd[]>{
   
    return this.http.get<Dvd[]>(this.url);
  }
  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.dvdUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
}
