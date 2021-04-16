import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';
import { MesOffresComponent } from './mes-offres/mes-offres.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { DemandeDetailComponent } from './demande-detail/demande-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MesDemandesComponent,
    MesOffresComponent,
    MonProfilComponent,
    LoginComponent,
    InscriptionComponent,
    NavComponent,
    CreateDemandeComponent,
    DemandeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

