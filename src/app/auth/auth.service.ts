import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl;
  private authTokenKey = 'auth_token';

  constructor(private http: HttpClient, private router : Router) { }

  //Login method
  login(payload : any){
    return this.http.post(`${this.apiUrl}/auth/login`, payload);
  }

  signup(payload : any){
    return this.http.post(`${this.apiUrl}/auth/signup`, payload)
  }
}
