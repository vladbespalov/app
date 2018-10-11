import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}
  getConfig() {
    return this.http.get(`http://localhost:3000/clients/`);
  }
}
