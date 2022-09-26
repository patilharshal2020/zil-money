import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';

  constructor(private httpClient: HttpClient,) { }
  
  getData() {
    return this.httpClient.get(this.url);
  }
}
