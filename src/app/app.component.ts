import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isUser = false;
  user?: string;

  constructor(private tokenStorageService: TokenStorageService, private router:Router) { }


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
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href="/connexion"
  }
}
