import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  
  private userId: any;

  constructor(private http: HttpClient) { }

  signUp(email: any, password: any, nom: string, prenom: string, telephone: any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      password,
      nom,
      prenom,
      telephone,
    }, httpOptions);
  }

  login(email: any, password: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  logout(): boolean {
    return false;
  }

  isLoggedIn() {
    return false;
  }

  getUserId(){
    if (this.isLoggedIn()) return this.userId;
    else return null;
  }

  // role de l'utilisateur actuel
  getRoles(){
    return 'admin'
    // return 'user'
  }

}
