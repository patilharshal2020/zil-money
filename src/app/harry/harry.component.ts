import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harry',
  templateUrl: './harry.component.html',
  styleUrls: ['./harry.component.css']
})
export class HarryComponent implements OnInit {
  // arr: any[] = [2, 4, 6, 8, 10];
  str: string = 'harshal patil'
  strRev: [] = [];

  constructor() { }

  ngOnInit(): void {
    const str1 = this.str.split(' ');
    const firstName = str1[0];
    const lastName = str1[1];
    this.str = `${lastName} ${firstName}`;
    str1.reverse();
    const str2 = str1;
    console.log('str2', str2);
    const replaced = str2.join().replace(',', ' ');
    console.log('str2', replaced);
  }

}
