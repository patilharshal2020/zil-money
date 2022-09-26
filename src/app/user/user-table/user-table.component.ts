import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

export class data {
  name: string = '';
  company: string = '';
  designation: string = '';
  email: string = ';'
  bgColor?: string = '';
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  userData: any;
  
  filteredData: data[] = [];

  constructor(
    private userServiceService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.userServiceService.getData().subscribe(res => {
      if (res){
        const data = res;
        this.userData = data;
        this.userData.forEach((x: { name: any; company: { name: any; designation: any; }; email: any; }) => {
          const dataToAdd = {
            name: x.name,
            company: x.company.name,
            designation: x.company.designation,
            email: x.email,
            bgColor: ''
          }
          if (dataToAdd.designation === 'angular Developer') {
            dataToAdd.bgColor = 'bg-success';
          }
          this.filteredData.push(dataToAdd);
        });
      }
    })
    
  }

}
