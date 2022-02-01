import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AuthentificationService } from '../services/authentification.service'; 
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.scss']
})
export class AnnuaireComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isUser = false;
  user?: string;

  query = "" // mots clés moteur de recherche

  addEmail: any; addNom: any; addPrenom: any; addTel: any ; addPassword: any;

  setEmail: any; setNom: any; setPrenom: any; setTel: any ; setPassword: any;
  errorMessage: any;

  listeUsers: any;



  constructor(
    private usersservice: UsersService,
    private auth: AuthentificationService,
    private tokenStorageService: TokenStorageService

  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(' connecté ? ',this.isLoggedIn)
    console.log(' roles : ', this.roles)

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isUser = this.roles.includes('ROLE_USER');

      console.log('isAdmin ',this.isAdmin )
      console.log('isUser ',this.isUser )

      this.user = user;

      console.log('user data : ', user);
      this.getAllUsers();
    }
  }


  

  getAllUsers() {
    this.usersservice.getAllUsers().subscribe(
      data => {
        this.listeUsers = data.users;
      }, err => {
        this.errorMessage = err.error.message;
      }
      );
  }

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
