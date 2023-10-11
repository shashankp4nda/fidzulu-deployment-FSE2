import { Injectable } from '@angular/core';
import { Toy } from '../models/toy.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  toys: Toy[]= [];
  private toyUrl="http://localhost:3021/toys/all/IN";

  getToys(): Observable<Toy[]>{
    return this.http.get<Toy[]>(this.toyUrl);
  }

  constructor(private http: HttpClient) { }
 
}
