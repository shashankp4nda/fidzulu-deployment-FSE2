import { Component, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  items: any = [
    ["Front-End team", "Angular", "https://content.mycareersfuture.gov.sg/wp-content/uploads/2023/05/People-Person-Quiz-1.jpg", "As a memeber of the front end team, I can comfirm that the front end team is the best"],
    ["Middle-Tier team", "NodeJS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkgXmGZFnXYKPoyM1ZLH-pqppZkZe52MLd-wwbcf6MkhqOLKEn0QR7w72mZPucvAmEwA&usqp=CAU", "our middle tier team is amazing"],
    ["Back-End team", "SpringBoot", "https://www.webdesignlane.com/assets/images/av/03.jpg", "and guess what? our backend team is pretty good too"]
  ];



}



