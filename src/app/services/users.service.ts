import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";

const USERS_API = 'http://localhost:8080/api/user/';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(USERS_API + 'findAllUsers', httpOptions);
  }

  getUserById(id:number): Observable<User> {
    return this.http.post(USERS_API + 'findUserById',id, httpOptions);
  }

  deleteUserById(id:number): Observable<User> {
    return this.http.post(USERS_API + 'delete',{id:id}, httpOptions);
  }

  updateUser(user:User): Observable<User> {
    return this.http.post(USERS_API + 'UpdateUserById',user, httpOptions);
  }

  createUser(user:User): Observable<any> {
    return this.http.post(AUTH_API + 'signup',user, httpOptions);
  }

  addUser(user:User) {}
  setUser(email: any, nom: any, prenom: any, tel: any, password: any) {}
  upgradeUser(email: string) {}



}
