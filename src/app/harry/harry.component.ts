import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.css']
})
export class HarryComponent implements OnInit {
  numList: number[] = [2,3,4,5,6];

  constructor() { }

  ngOnInit(): void {

    const filteredList = this.numList.filter(x => x % 2 == 0);

    console.log(filteredList);
  }

}
