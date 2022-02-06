import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/user';
import { iLayout } from '../class/layout';


@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit  {



  constructor(private http: HttpClient) { }

  ngOnInit() {}

  url: string = 'http://127.0.0.1:5000';

  // getDirection() {
  //   return this.http.get<Weather[]>(this.direction);
  // }

  getUser() {
    return this.http.get<User[]>(this.url + '/api/v1/users');
  }

  getLayout() {
    return this.http.get<iLayout>(this.url + '/api/v1/layout');
  }

  showPath() {
    return this.http.post(this.url + '/api/v1/showpath', FormData).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
