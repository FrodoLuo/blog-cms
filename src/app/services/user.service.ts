import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AES, MD5, mode, pad } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}
  
  public requestLogIn(email, password) {
    const randomKey = Date.now().toFixed(0);
    const cipheredPassword = AES.encrypt(MD5(password).toString(), randomKey, {
      mode: mode.ECB,
      padding: pad.ZeroPadding
    });
    console.log(cipheredPassword.ciphertext.toString());
    this.http.post(
      '/api/users',
      {
        email,
        password: cipheredPassword.toString(),
        key: randomKey
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).subscribe(
      res => {
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
