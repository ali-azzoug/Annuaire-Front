import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERS_API = 'http://localhost:8080/api/user/'

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

  addUser(email: any, nom: any, prenom: any, tel: any, password: any) {}
  removeUser(email: string) {}
  setUser(email: any, nom: any, prenom: any, tel: any, password: any) {}

  // upgrade user to admin
  upgradeUser(email: string) {}
  
  searchUsers(words: any) {
    if(words.length > 0) {
      // return data
      console.log('recherche ', words);
    }
    else {
      // ne rien faire
      console.log('requète vide');
    }
    
  }

  // verifie si un utilisateur avec cet email existe
  CheckExistingUser(email: string) : boolean {
    return false;
  }
}
