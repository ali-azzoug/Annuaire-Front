import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUser = {
    nom: 'Marley',
    prenom: 'Bob',
    tel: '0123456789',
    email: 'a@a.com',
    roles: 'user',
    
  }

  setNom: any; setPrenom: any; setTel: any ; setPassword: any;


  edit = false;

  constructor(private usersservice: UsersService) { }

  ngOnInit(): void {
  }

  editProfil() {
    this.edit = !this.edit;
  }

  setUser() {
      this.usersservice.setUser(this.currentUser.email, this.setNom, this.setPrenom, this.setTel, this.setPassword);
      this.setNom= "";
      this.setPrenom = "";
      this.setTel = "";
      this.setPassword = "";
      alert('Profil mis a jour avec succès !')
  }
}
