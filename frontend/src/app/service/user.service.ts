import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private bareUrl = "https://api.github.com/users";
  private searchUrl = "https://api.github.com/search/users";
  constructor(private http: HttpClient) { }

  getUserlist(): Observable<any> {
    return this.http.get(`${this.bareUrl}`);
  }

  searchByName( q: any): Observable<any> {
    return this.http.get(`${this.searchUrl}?q=${q}`);
  }
}
