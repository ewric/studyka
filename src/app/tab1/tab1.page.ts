/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {
  src= "../../assets/img/pikachu1.svg";
  img_rotator=0;

  constructor() {}
  ngOnInit(){
    setInterval(() =>{
      if(this.img_rotator===0)
        {this.src = "../../assets/img/pikachu1.svg";}
      if(this.img_rotator===1)
        {this.src = "../../assets/img/pikachu2.svg";}
      if(this.img_rotator===2)
        {this.src = "../../assets/img/pikachu3.svg";}
      this.img_rotator++;
      if(this.img_rotator>=3)
        {this.img_rotator=0;}
    }, 500);
  }



}
