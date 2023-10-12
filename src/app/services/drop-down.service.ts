import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  selectedValue: string = "IN";

  public setSelectedValue(value: string) {
    this.selectedValue = value;
  }

  public getSelectedValue() {
    
    return this.selectedValue;
  }

  constructor() { }
}
