import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) {
  }

  index() {
    return this.http.get(`https://randomuser.me/api/?results=50`);
  }

  get() {
    return this.http.get(`https://randomuser.me/api/`);
  }

  store() {
    return this.http.post(`https://randomuser.me/api/`, {});
  }
}
