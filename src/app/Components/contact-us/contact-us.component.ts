import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  email:String = "contact@fmr.com";
  phone:String = "123-456-7890";
  address:String = "245 Summer Street, Boston, MA";
  
}
