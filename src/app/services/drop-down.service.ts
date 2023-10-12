import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  selectedValue: string = "India";

  setSelectedValue(value: string) {
    this.selectedValue = value;
  }

  getSelectedValue() {
    return this.selectedValue;
  }

  constructor() { }
}
