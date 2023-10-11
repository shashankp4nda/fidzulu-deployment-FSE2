import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  dvd: Dvd[]= [];
  private dvdUrl="";

  getDvds(): Observable<Dvd[]>{
   
    return this.http.get<Dvd[]>(this.dvdUrl);
  }
  constructor(private http: HttpClient) { }
}
