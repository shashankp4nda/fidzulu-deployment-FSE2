import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { TeamService } from './team.service';
<<<<<<< HEAD
import { inject } from '@angular/core/testing';
import { Team } from '../models/team.model';
import { HttpErrorResponse } from '@angular/common/http';
=======
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
>>>>>>> 3509b21c7031cfaa6d7a18ca9d22c1345478c36f

describe('TeamService', () => {
  let service: TeamService;
  let httpTestingController: HttpTestingController;
<<<<<<< HEAD

  let testBikeTeam: Team[] = [
  {
      "team": "Back-end",
      "memberNames": ["A", "B"]
  },
  {
      "team": "Middle-tier",
      "memberNames": ["X", "Y", "Z"]

  },
  {
      "team": "Front-end",
      "memberNames": ["L", "M", "N", "O", "P", "Q"]
  }
]

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
=======

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule
    ]});
>>>>>>> 3509b21c7031cfaa6d7a18ca9d22c1345478c36f
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the values for the bike team', inject([TeamService], fakeAsync((service: TeamService) => {
    let teams: Team[]=[];
    service.getBikeTeam().subscribe(data => {teams = data});
    const req = httpTestingController.expectOne(service.bikeTeamUrl);
    expect(req.request.method).toEqual('GET');
      req.flush(testBikeTeam);
      tick();
      expect(teams[0].team).toBe('Front-End');
      expect(teams[2].memberNames[0]).toContain('Jyothsna');
  })))


  it('should handle a 404 error for Bike Team', inject([TeamService], fakeAsync((service: TeamService) => { 
    let errorResp: HttpErrorResponse; 
    let errorReply: string = ''; 
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();

    service.getBikeTeam()
    .subscribe({
      next: () => fail('Should not succeed'), 
      error: (err) => errorReply = err
    }); 

    const req = httpTestingController.expectOne(service.bikeTeamUrl); // Assert that the request is a GET. 
    expect(req.request.method).toEqual('GET'); // Respond with error 
    req.flush('Forced 404', { status: 404, statusText: 'Not Found' }); // Cause all Observables to complete and check the results 
    tick();

    expect(errorReply).toBe( 'Unable to contact service; please try again later.'); 
    expect(errorHandlerSpy).toHaveBeenCalled(); errorResp = errorHandlerSpy.calls.argsFor(0)[0];
  })));

});
