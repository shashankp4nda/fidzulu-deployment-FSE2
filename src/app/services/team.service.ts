import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team.model';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Team[]= [];
  private teamUrl="";

  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(this.teamUrl);
  }

  constructor(private http: HttpClient) { }
}
