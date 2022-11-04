import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.css']
})
export class HarryComponent implements OnInit {
  showPlayer: boolean = true;
  title: string = 'Harry Test Session:'
  navs: string[] = [];

  currentTime: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.navs = ['Q&A', 'Resources', 'People']
  } 

  setActive(evt: any) {
    console.log('evt', evt);
  }

  
  onTimeUpdate(event: CustomEvent<number>) {
    this.currentTime = event.detail;
    const roundTime = Math.round(this.currentTime);
    console.log('time', roundTime);
    if (roundTime == 5) {
      this.currentTime += 60*8; 
    }
  }

}
