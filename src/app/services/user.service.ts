import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AES, MD5, mode, pad, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public requestLogIn(email, password) {
    const randomKey = this.padTo16(Date.now().toString());
    const cipheredPassword = this.cipherPassword(password, randomKey)
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', cipheredPassword);
    formData.append('key', randomKey);
    this.http.post(
      '/api/users',
      formData,
    ).subscribe(
      res => {
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
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
