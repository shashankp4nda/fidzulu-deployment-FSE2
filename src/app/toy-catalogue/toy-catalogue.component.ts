import { Component, OnInit } from '@angular/core';
import { Toy } from '../models/toy.model';
import { ToyService } from '../services/toy.service';

@Component({
  selector: 'app-toy-catalogue',
  templateUrl: './toy-catalogue.component.html',
  styleUrls: ['./toy-catalogue.component.css']
})
export class ToyCatalogueComponent implements OnInit{

  ngOnInit(): void {
    this.getToys();
  }

  public toys: Toy[] = [];
  errorMessage: string = "";

  constructor(private toyService: ToyService){}

  getToys(){
    this.toyService.getToys().subscribe({ next : (data) => 
      { 
        this.toys = data; 
        this.errorMessage = '';
      }, 
        error: (e) => this.errorMessage = e },
    );
    console.log(this.errorMessage);
  }
}
