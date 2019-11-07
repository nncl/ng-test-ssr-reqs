import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferHttpService } from '@gorniv/ngx-universal';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: TransferHttpService,
              public httpClient: HttpClient) {
  }

  index() {
    return this.http.get(`https://randomuser.me/api/?results=50`);
  }

  get() {
    return this.http.get(`https://randomuser.me/api/`);
  }

  getAsync() {
    return this.httpClient.get(`https://randomuser.me/api/`);
  }

  store() {
    return this.http.post(`https://randomuser.me/api/`, {});
  }
}
