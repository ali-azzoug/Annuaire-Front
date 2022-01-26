import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  private userId: any;

  constructor() { }

  signUp(email: any, password: any, nom: string, prenom: string, tel: any): boolean {
    return false;
  }

  login(email: any, password: any): boolean {
    return false;
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
