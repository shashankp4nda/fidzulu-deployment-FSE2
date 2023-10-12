import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  combinedTeams: Team[] = [];

  laptopTeam: Team[] = [];
  bikeTeam: Team[] = [];
  bookTeam: Team[] = [];
  foodTeam: Team[] = [];
  dvdTeam: Team[] = [];
  toyTeam: Team[] = [];
 
  items: any = [    
    ["Front-End team", "Angular", "assets/front.jpeg", "As a member of the front end team, I can confirm that the front end team is the best", ""],
    ["Middle-Tier team", "NodeJS", "assets/middle.jpeg", "our middle tier team is amazing", ""],
    ["Back-End team", "SpringBoot", "https://www.webdesignlane.com/assets/images/av/03.jpg", "and guess what? our backend team is pretty good too", ""]
  ];


  ngOnInit(){
    this.getTeamMembers();
  }

  constructor(private service:TeamService){

  }

  getTeamMembers(){
    this.service.getBikeTeam().subscribe(data => this.bikeTeam = data);
    this.service.getBookTeam().subscribe(data => this.bookTeam = data);
    this.service.getFoodTeam().subscribe(data => this.foodTeam = data);
    this.service.getToyTeam().subscribe(data => this.toyTeam = data);
    this.service.getDvdTeam().subscribe(data => this.dvdTeam = data);
    this.service.getLaptopTeam().subscribe(data => this.laptopTeam = data);

    //COMBINING ALL THE TEAMS
    this.combinedTeams = [
      {
        "team": "Back-End",
        "memberNames": [...this.bikeTeam[0].memberNames,
                        ...this.bookTeam[0].memberNames,
                        ...this.foodTeam[0].memberNames,
                        ...this.laptopTeam[0].memberNames,
                        ...this.toyTeam[0].memberNames,
                        ...this.dvdTeam[0].memberNames
        ]
      },
      {
        "team": "Middle-Ware",
        "memberNames": [...this.bikeTeam[1].memberNames, ...this.bookTeam[1].memberNames]
      },
      {
        "team": "Front-End",
        "memberNames": this.bikeTeam[2].memberNames
      }
    ]

    console.log(this.combinedTeams);
    console.log(this.items[0][4]);
    this.items[0][4] = this.combinedTeams[0].memberNames.join(' ');
    console.log(this.items[0][4]);
    this.items[1][4] = this.combinedTeams[0].memberNames.join(' ');
    this.items[2][4] = this.combinedTeams[0].memberNames.join(' ');

  }
}



