import { Component, OnInit } from '@angular/core';
import { Bike } from '../models/bike.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Bikes'
        },
        {
          label: 'Books'
      },
      {
        label: 'DVDs'
    },
    {
      label: 'Food'
  },
  {
    label: 'Laptops'
},
{
  label: 'Toys'
}
      ];
    }

  bikes: Bike[] = [
    {
      id: 1234,
      name: "Mamba Sport Bike",
      brand: "Mamba Bikes",
      color: "black",
      price: 75.88,
      rating: 5
    },
    {
      id: 1235,
      name: "DJ Fat Bike 500W",
      brand: "DJ Bikes",
      color: "grey",
      price: 1599.86,
      rating: 3
    }
  ];
}
