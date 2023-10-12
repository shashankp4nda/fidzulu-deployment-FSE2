import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { Team } from 'src/app/models/team.model';
import { of } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import {CarouselModule} from 'primeng/carousel';
import { CardModule } from 'primeng/card';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let mockBikeTeam: Team[] = [
    {
        "team": "Backend",
        "memberNames": ["A", "B"]
    },
    {
        "team": "Middle tier",
        "memberNames": ["X", "Y", "Z"]

    },
    {
        "team": "Front end",
        "memberNames": ["L", "M", "N", "O", "P", "Q"]
    }
  ]

  let mockBookTeam:Team[] = [
    {
        "team": "Backend",
        "memberNames": ["G", "H"]
    },
    {
        "team": "Middle tier",
        "memberNames": ["T", "U", "V"]

    },
    {
        "team": "Front end",
        "memberNames": ["L", "M", "N", "O", "P", "Q"]
    }
  ]

  let mockDvdTeam:Team[]= [
    {
        "team": "Backend",
        "memberNames": ["K", "R"]
    },
    {
        "team": "Middle tier",
        "memberNames": ["T", "U", "V"]

    },
    {
        "team": "Front end",
        "memberNames": ["L", "M", "N", "O", "P", "Q"]
    }
  ]

  let mockFoodTeam:Team[] =[
    {
        "team": "Backend",
        "memberNames": ["C", "D"]
    },
    {
        "team": "Middle tier",
        "memberNames": ["X", "Y", "Z"]

    },
    {
        "team": "Front end",
        "memberNames": ["L", "M", "N", "O", "P", "Q"]
    }
  ]

  let mockToyTeam: Team[] = [
    {
        "team": "Backend",
        "memberNames": ["E", "F"]
    },
    {
        "team": "Middle tier",
        "memberNames": ["X", "Y", "Z"]

    },
    {
        "team": "Front end",
        "memberNames": ["L", "M", "N", "O", "P", "Q"]
    }
  ]

  let mockLaptopTeam: Team[] = [
    {
        "team": "Backend",
        "memberNames": ["I", "J"]
    },
    {
        "team": "Middle tier",
        "memberNames": ["T", "U", "V"]

    },
    {
        "team": "Front end",
        "memberNames": ["L", "M", "N", "O", "P", "Q"]
    }
  ]

  let teamService: any = jasmine.createSpyObj('TeamService',['getBikeTeam', 'getBookTeam', 'getFoodTeam', 'getToyTeam', 'getDvdTeam', 'getLaptopTeam']);
  teamService.getBikeTeam.and.returnValue(of(mockBikeTeam));
  teamService.getBookTeam.and.returnValue(of(mockBookTeam));
  teamService.getFoodTeam.and.returnValue(of(mockFoodTeam));
  teamService.getDvdTeam.and.returnValue(of(mockDvdTeam));
  teamService.getToyTeam.and.returnValue(of(mockToyTeam));
  teamService.getLaptopTeam.and.returnValue(of(mockLaptopTeam));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
                  CarouselModule, 
                  CardModule,
                ],
      declarations: [ AboutComponent ],
      providers:[
        {provide: TeamService, useValue: teamService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from bike service', () => {
    expect(component.bikeTeam[0].memberNames).toContain("A");
    expect(component.bikeTeam[0].memberNames).toContain("B");

    expect(component.bikeTeam[1].memberNames).toContain("Y");

    expect(component.bikeTeam[2].memberNames).toContain("P");
  })

  it('should get data from book service', () => {
    expect(component.bookTeam[0].memberNames).toContain("G");
    expect(component.bookTeam[0].memberNames).toContain("H");

    expect(component.bookTeam[1].memberNames).toContain("U");

    expect(component.bookTeam[2].memberNames).toContain("P");
  })

  it('should get data from food service', () => {
    expect(component.foodTeam[0].memberNames).toContain("C");
    expect(component.foodTeam[0].memberNames).toContain("D");

    expect(component.foodTeam[1].memberNames).toContain("Y");

    expect(component.foodTeam[2].memberNames).toContain("P");
  })

  it('should get data from toy service', () => {
    expect(component.toyTeam[0].memberNames).toContain("E");
    expect(component.toyTeam[0].memberNames).toContain("F");

    expect(component.toyTeam[1].memberNames).toContain("Y");

    expect(component.toyTeam[2].memberNames).toContain("P");
  })

  it('should get data from dvd service', () => {
    expect(component.dvdTeam[0].memberNames).toContain("K");
    expect(component.dvdTeam[0].memberNames).toContain("R");

    expect(component.dvdTeam[1].memberNames).toContain("U");

    expect(component.dvdTeam[2].memberNames).toContain("P");
  })

  it('should get data from laptop service', () => {
    expect(component.laptopTeam[0].memberNames).toContain("I");
    expect(component.laptopTeam[0].memberNames).toContain("J");

    expect(component.laptopTeam[1].memberNames).toContain("U");

    expect(component.laptopTeam[2].memberNames).toContain("P");
  })


  it('should combine the data from each service', () => {
    expect(component.combinedTeams.length).toBe(3);

    expect(component.combinedTeams[0].memberNames).toContain("A");
    expect(component.combinedTeams[0].memberNames).toContain("B");
    expect(component.combinedTeams[0].memberNames).toContain("C");
    expect(component.combinedTeams[0].memberNames).toContain("D");
    expect(component.combinedTeams[0].memberNames).toContain("E");
    expect(component.combinedTeams[0].memberNames).toContain("F");
    expect(component.combinedTeams[0].memberNames).toContain("G");
    expect(component.combinedTeams[0].memberNames).toContain("H");
    expect(component.combinedTeams[0].memberNames).toContain("I");
    expect(component.combinedTeams[0].memberNames).toContain("J");
    expect(component.combinedTeams[0].memberNames).toContain("K");
    expect(component.combinedTeams[0].memberNames).toContain("R");

    expect(component.combinedTeams[1].memberNames).toContain("T");
    expect(component.combinedTeams[1].memberNames).toContain("U");
    expect(component.combinedTeams[1].memberNames).toContain("V");
    expect(component.combinedTeams[1].memberNames).toContain("X");
    expect(component.combinedTeams[1].memberNames).toContain("Y");
    expect(component.combinedTeams[1].memberNames).toContain("Z");

    expect(component.combinedTeams[2].memberNames).toContain("L");
    expect(component.combinedTeams[2].memberNames).toContain("M");
    expect(component.combinedTeams[2].memberNames).toContain("N");
    expect(component.combinedTeams[2].memberNames).toContain("O");
    expect(component.combinedTeams[2].memberNames).toContain("P");
    expect(component.combinedTeams[2].memberNames).toContain("Q");

  })


});
