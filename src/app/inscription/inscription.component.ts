import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    telephone: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthentificationService) {  

  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    const { nom, prenom, telephone, email, password} = this.form;
    console.log({ nom, prenom, telephone, email, password});
    
    this.authService.signUp(email, password,nom, prenom, telephone).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  

}
