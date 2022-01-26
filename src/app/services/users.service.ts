import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

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
