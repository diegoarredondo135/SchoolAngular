import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new Headers();
  constructor(private http: Http, private router: Router, private location: Location) {
    this.headers.append('Authorization', 'Basic U1NJRFNjaG9vbDpzZWNyZXRAc2Nob29sLmFwcA==');
    this.headers.append('Access', 'Basic U1NJRFNjaG9vbDpzZWNyZXRAc2Nob29sLmFwcA==');
  }

  ruta = 'http://192.168.136.167:3000/oauth/token';

  login(data: any) {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', data.username);
    body.set('password', data.password);
    body.set('scope', 'read');
    return this.http.post(this.ruta, body, { headers: this.headers });
  }

  validate() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['login']);
    }
  }

  validateLogin() {
    if (localStorage.getItem('token') != null) {
      this.location.back();
    }
  }

}
