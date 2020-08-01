import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AES, MD5, mode, pad, enc } from 'crypto-js';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

type User = {
  nickname: string;
  email: string;
  type: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public user$ = new BehaviorSubject<User>(null);

  public fetchUser() {
    this.http.get<User>(
      '/api/users'
    ).toPromise()
      .then(
        res => {
          this.user$.next(res)
          return res;
        },
        error => {
          this.user$.next(null)
          return null;
        }
      )
  }

  public requestLogIn(email, password) {
    const randomKey = this.padTo16(Date.now().toString());
    const cipheredPassword = this.cipherPassword(password, randomKey)
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', cipheredPassword);
    formData.append('key', randomKey);
    return this.http.post(
      '/api/users',
      formData,
    );
  }

  private cipherPassword(origin: string, passphase: string): string {
    const encodedOrigin = enc.Utf8.parse(MD5(origin).toString());
    const encodedKey = enc.Utf8.parse(passphase)
    const cipheredPassword = AES.encrypt(encodedOrigin, encodedKey, {
      mode: mode.CBC,
      iv: encodedKey,
      padding: pad.ZeroPadding
    });
    return enc.Base64.stringify(cipheredPassword.ciphertext)
  }
  private padTo16(origin: string): string {
    if (this.padTo16.length > 16) {
      return origin.slice(0, 16);
    } else {
      let result = origin;
      for (let i = 0; i < 16 - origin.length; i++) {
        result += '0'
      }
      return result;
    }
  }
}
