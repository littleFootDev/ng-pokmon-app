import { Injectable } from '@angular/core';
import { Observable, of, tap, } from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl!: string;
  constructor() { }

  login(name: string, password: string) : Observable<boolean> {
    const isLoggedIn = (name === 'pikachu' && password === 'pikachu')
    return of(true).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}


