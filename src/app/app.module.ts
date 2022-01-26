import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';

const appRoutes: Routes = [
  { path: 'connexion', component : ConnexionComponent},
  { path: 'inscription', component : InscriptionComponent},
  { path: 'profil', component : ProfilComponent},
  { path: 'annuaire', component : AnnuaireComponent},
  { path: '', component : ConnexionComponent}, 
]

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProfilComponent,
    AnnuaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
