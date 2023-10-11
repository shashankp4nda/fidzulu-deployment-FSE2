import { Component } from '@angular/core';
import { Toy } from '../models/toy.model';
import { ToyService } from '../services/toy.service';

@Component({
  selector: 'app-toy-catalogue',
  templateUrl: './toy-catalogue.component.html',
  styleUrls: ['./toy-catalogue.component.css']
})
export class ToyCatalogueComponent {

  public toys: Toy[] = [];

  constructor(private toyService: ToyService){}

  getBooks(){
    this.toyService.getToys().subscribe(data => this.toys = data);
  }
}
