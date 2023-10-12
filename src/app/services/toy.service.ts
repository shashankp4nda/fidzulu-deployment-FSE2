import { Injectable } from '@angular/core';
import { Toy } from '../models/toy.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  toys: Toy[]= [];
<<<<<<< HEAD
  private toyUrl="http://localhost:3021/toys/all/IN";
=======
  private toyUrl="";
  private url="";
>>>>>>> 0c7dce67ce1c6cdde0399c84b90246b33e45d3e0

  getToys(): Observable<Toy[]>{
    return this.http.get<Toy[]>(this.url);
  }

  constructor(private http: HttpClient) { }

  processSelectedCountry(selectedCountry: string) {
    this.url =  this.toyUrl + selectedCountry;
    console.log(`Selected value is: ${this.url}`);
  }
 
}
