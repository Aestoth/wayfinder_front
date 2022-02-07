import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { iPois } from '../interfaces/pois';
import { iLayout } from '../interfaces/layout';




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

  getPois() {
    return this.http.get<iLayout[]>(this.url + '/api/v1/pois');
  }

  showPath() {
    return this.http.post(this.url + '/api/v1/showpath', FormData).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
