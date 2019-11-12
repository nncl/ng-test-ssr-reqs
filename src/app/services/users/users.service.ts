import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isBrowser: boolean;

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  index() {
    return this.http.get(`https://randomuser.me/api/?results=50`);
  }

  get() {
    return this.http.get(`https://randomuser.me/api/`);
  }

  getAsync(results: number = 2) {
    if (!this.isBrowser) {
      return EMPTY;
    }
    return this.http.get(`https://randomuser.me/api/?results=${results}`);
  }

  store() {
    return this.http.post(`https://randomuser.me/api/`, {});
  }
}
