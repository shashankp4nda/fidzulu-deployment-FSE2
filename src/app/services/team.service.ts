import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Team } from '../models/team.model';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  bikeTeamUrl: string= "http://54.90.86.99:3021/bikes/team";
  bookTeamUrl: string= "http://54.90.86.99:3022/classB/book/team";
  foodTeamUrl: string= "http://54.90.86.99:3021/food/team";
  dvdTeamUrl: string = "http://54.90.86.99:3022/classB/dvd/team"; 
  toysTeamUrl: string = "http://54.90.86.99:3021/toys/team";
  laptopTeamUrl:string= "http://54.90.86.99:3022/classB/laptop/team"; 

  constructor(private http: HttpClient) { }

  getBikeTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(this.bikeTeamUrl)
      .pipe(catchError(this.handleError));
    //return of(this.mockBikeTeam);
  }

  getBookTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(this.bookTeamUrl)
      .pipe(catchError(this.handleError));
    //return of(this.mockBookTeam);
  }

  getFoodTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(this.foodTeamUrl)
      .pipe(catchError(this.handleError));
    //return of(this.mockFoodTeam);
  }

  getLaptopTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(this.laptopTeamUrl)
      .pipe(catchError(this.handleError));
    //return of(this.mockLaptopTeam);
  }

  getDvdTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(this.dvdTeamUrl)
      .pipe(catchError(this.handleError));
    //return of(this.mockDvdTeam);
  }

  getToyTeam(): Observable<Team[]>{
    return this.http.get<Team[]>(this.toysTeamUrl)
      .pipe(catchError(this.handleError));
    //return of(this.mockToyTeam)
  }

  handleError(response: HttpErrorResponse) 
  { 
    if(response.error instanceof ProgressEvent) { 
      console.error('A client-side or network error occurred; ' + `${response.message} ${response.status} ${response.statusText}`); 
    } 
    else { 
      console.error(`Backend returned code ${response.status}, ` + `body was: ${JSON.stringify(response.error)}`); 
    } 
    return throwError( () => 'Unable to contact service; please try again later.'); 
  }
}


/******MOCK DATA ******/
// mockBikeTeam: Team[] = [
//   {
//       "team": "Backend",
//       "memberNames": ["A", "B"]
//   },
//   {
//       "team": "Middle tier",
//       "memberNames": ["X", "Y", "Z"]

//   },
//   {
//       "team": "Front end",
//       "memberNames": ["L", "M", "N", "O", "P", "Q"]
//   }
// ]

// mockBookTeam:Team[] = [
//   {
//       "team": "Backend",
//       "memberNames": ["G", "H"]
//   },
//   {
//       "team": "Middle tier",
//       "memberNames": ["T", "U", "V"]

//   },
//   {
//       "team": "Front end",
//       "memberNames": ["L", "M", "N", "O", "P", "Q"]
//   }
// ]

// mockDvdTeam:Team[]= [
//   {
//       "team": "Backend",
//       "memberNames": ["K", "R"]
//   },
//   {
//       "team": "Middle tier",
//       "memberNames": ["T", "U", "V"]

//   },
//   {
//       "team": "Front end",
//       "memberNames": ["L", "M", "N", "O", "P", "Q"]
//   }
// ]

// mockFoodTeam:Team[] =[
//   {
//       "team": "Backend",
//       "memberNames": ["C", "D"]
//   },
//   {
//       "team": "Middle tier",
//       "memberNames": ["X", "Y", "Z"]

//   },
//   {
//       "team": "Front end",
//       "memberNames": ["L", "M", "N", "O", "P", "Q"]
//   }
// ]

// mockToyTeam: Team[] = [
//   {
//       "team": "Backend",
//       "memberNames": ["E", "F"]
//   },
//   {
//       "team": "Middle tier",
//       "memberNames": ["X", "Y", "Z"]

//   },
//   {
//       "team": "Front end",
//       "memberNames": ["L", "M", "N", "O", "P", "Q"]
//   }
// ]

// mockLaptopTeam: Team[] = [
//   {
//       "team": "Backend",
//       "memberNames": ["I", "J"]
//   },
//   {
//       "team": "Middle tier",
//       "memberNames": ["T", "U", "V"]

//   },
//   {
//       "team": "Front end",
//       "memberNames": ["L", "M", "N", "O", "P", "Q"]
//   }
// ]