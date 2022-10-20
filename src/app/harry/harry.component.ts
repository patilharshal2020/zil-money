import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.css']
})
export class HarryComponent implements OnInit {
  slide = 'slideOne';
  slideOne: boolean = true;
  slideTwo: boolean = false;
  slideThree: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSlides(a: number) {
    
   };

  currentSlide() {
    if (this.slide == 'slideOne') {
      this.slideOne = true;
      this.slideTwo = false;
      this.slideThree = false;
    } else if (this.slide == 'slideTwo') {
      this.slideOne = false;
      this.slideTwo = true;
      this.slideThree = false;
    } else if (this.slide == 'slideThree') {
      this.slideOne = false;
      this.slideTwo = false;
      this.slideThree = true;
    }
   };

}
