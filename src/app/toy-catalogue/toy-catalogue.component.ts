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

  constructor(private toyService: ToyService){}

  getToys(){
    this.toyService.getToys().subscribe(data => this.toys = data);
  }
}
