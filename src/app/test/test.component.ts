import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  userDetails: any = [];

  constructor(
    private testService: TestService,
  ) { }

  ngOnInit(): void {
    this.testService.getUsers().subscribe(res => {
      this.userDetails = res;
      console.log('users', this.userDetails);
    });

  }

}
