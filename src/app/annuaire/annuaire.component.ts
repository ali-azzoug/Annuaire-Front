import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AuthentificationService } from '../services/authentification.service';
import { TokenStorageService } from '../services/token-storage.service';
import {User} from "../models/user.model";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "../user-dialog/user-dialog.component";


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

  errorMessage: any;
  listeUsers: any;

  userObj: User = new User();
  userEdit :User = new User();
  usersObj:User[] = [];
  initList: any;
  emptyList= false;

  constructor(
    private usersservice: UsersService,
    private auth: AuthentificationService,
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialog
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
        this.initList = data.users;
      }, err => {
        this.errorMessage = err.error.message;
      }
      );
  }

  searchData(event:any){
    if(event.target.value != ""){
      this.usersObj = this.listeUsers;
      this.listeUsers = this.usersObj.filter(x => x.nom?.includes(event.target.value) || x.prenom?.includes(event.target.value) );
    }
    else {
      this.listeUsers = this.initList;
    }
    this.listeUsers.length === 0 ? this.emptyList = true:this.emptyList = false;
  }

  removeUser(email: string) {
    this.usersservice.removeUser(email);
  }

  openDialog(id:any,type:string,user:any): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '80%',
      height: '90%',
      data: {id: id,type:type,user:user},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result === 'ok'){
        //setRecord
      }
    });
  }


}
