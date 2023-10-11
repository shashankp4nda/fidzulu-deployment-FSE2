import { Component } from '@angular/core';
import { Dvd } from '../models/dvd.model';
import { DvdService } from '../services/dvd.service';

@Component({
  selector: 'app-dvd-catalogue',
  templateUrl: './dvd-catalogue.component.html',
  styleUrls: ['./dvd-catalogue.component.css']
})
export class DvdCatalogueComponent {

  public dvds: Dvd[] = [];

  constructor(private dvdService: DvdService){}

  getBooks(){
    this.dvdService.getDvds().subscribe(data => this.dvds = data);
  }
}
