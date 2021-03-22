import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string[] = [];
  url = '/api';

  constructor() { }

  getToken(): string[] {
    return this.token;
  }

  setToken(token): void {
    this.token = token;
  }
}
