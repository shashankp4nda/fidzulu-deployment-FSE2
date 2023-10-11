import { Injectable } from '@angular/core';
import { Toy } from '../models/toy.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  toys: Toy[]= [];
  private toyUrl="";
  private url="";

  getToys(): Observable<Toy[]>{
    return this.http.get<Toy[]>(this.url);
  }

  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.toyUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
 
}
