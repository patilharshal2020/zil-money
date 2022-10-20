import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type user = {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  userList$!: Observable<user[]>;
  private url = 'https://gorest.co.in/public/v2/users';

  constructor(
    private httpClient: HttpClient,
  ) { 
  }

  getUsers(): Observable<user[]> { 
    return this.httpClient.get<user[]>(this.url);
  }

  
}
