import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarduserService {
  constructor(private http: HttpClient) {}
  getUser(username) {
    return this.http.get(`http://api.github.com/users/${username}`);
  }
}
