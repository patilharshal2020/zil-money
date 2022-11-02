import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.css']
})
export class HarryComponent implements OnInit {

  currentTime: number = 0;
  constructor() { }

  ngOnInit(): void {
  } 

  
  onTimeUpdate(event: CustomEvent<number>) {
    this.currentTime = event.detail;
    console.log('time', this.currentTime);
  }

}
