import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {TokenStorageService} from "../services/token-storage.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user = new User();
  currentUser = {
    nom: 'Marley',
    prenom: 'Bob',
    tel: '0123456789',
    email: 'a@a.com',
    roles: 'user',

  }

  setNom: any; setPrenom: any; setTel: any ; setPassword: any;


  edit = false;

  constructor(private usersservice: UsersService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    console.log(this.user);
  }

  editProfil() {
    this.edit = !this.edit;
  }

  setUser() {
    let tempuser = this.user;
    tempuser.email='tset@xxxxxxxxxx';
     this.usersservice.updateUser(tempuser).subscribe(
       (data)=> {
         alert('Profil mis a jour avec succès !');
       }
     )

  }
}
