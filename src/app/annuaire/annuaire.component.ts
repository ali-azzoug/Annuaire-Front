import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AuthentificationService } from '../services/authentification.service'; 

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.scss']
})
export class AnnuaireComponent implements OnInit {
  isAdmin = true;
  query = "" // mots clés moteur de recherche
  roles= "user"

  addEmail: any; addNom: any; addPrenom: any; addTel: any ; addPassword: any;

  setEmail: any; setNom: any; setPrenom: any; setTel: any ; setPassword: any;



  constructor(
    private usersservice: UsersService,
    private auth: AuthentificationService,

  ) {
    this.roles = this.getUserRoles();
   }

  ngOnInit(): void {
  }
  listeUsers = [{
    nom : "a",
    prenom : "aad",
    email: "j@j.com",
    tel: "00000000",
  },
  {
    nom : "a",
    prenom : "aad",
    email: "j@j.com",
    tel: "00000000",
  },  
  {
    nom : "azzoug",
    prenom : "",
    email: "a@azzoug.com",
    tel: "0123456789",
  },
  ]

  UserExists(email: string): boolean {
    return this.usersservice.CheckExistingUser(email);
  }

  setUser() {
    if(!this.UserExists(this.setEmail)) {alert('aucun utilisateur ne correspond a cet email')}
    else {
      this.usersservice.setUser(this.setEmail, this.setNom, this.setPrenom, this.setTel, this.setPassword);
      this.setEmail = "";
      this.setNom= "";
      this.setPrenom = "";
      this.setTel = "";
      this.setPassword = "";
      alert('Profil mis a jour avec succès !')
    }
  }

  addUser() {
    if(this.UserExists(this.addEmail)) {alert('cet utilisateur exist déjà')}
    else {
      this.usersservice.setUser(this.addEmail, this.addNom, this.addPrenom, this.addTel, this.addPassword);
      this.addEmail = "";
      this.addNom= "";
      this.addPrenom = "";
      this.addTel = "";
      this.addPassword = "";
      alert('Utilisateur ajouté avec succès !')
    }
  }

  getUserRoles() {
    return this.auth.getRoles();
  }

  searchData(){
    this.usersservice.searchUsers(this.query);
    //
  }

  removeUser(email: string) {
    this.usersservice.removeUser(email);
  }

  Upgrade(email: string) {
    this.usersservice.upgradeUser(email);
  }

}
