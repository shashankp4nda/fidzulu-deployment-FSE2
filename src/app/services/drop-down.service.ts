import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  selectedValue: string = "India";
  code: string = "IN";
  public setSelectedValue(value: string) {
    this.selectedValue = value;
  }

  public getSelectedValue() {
    
    if(this.selectedValue==='India')
      this.code = 'IN';
  else if(this.selectedValue==='Ireland')
    this.code = 'IE';
  else
    this.selectedValue = 'US-NC'
    return this.code;
  }

  constructor() { }
}
