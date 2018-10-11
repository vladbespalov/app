import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarduserService {
  constructor(private http: HttpClient) {}
  getUser(id) {
    return this.http.get(`http://localhost:3000/clients/${id}`);
  }
}
