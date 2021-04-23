import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsuarioService } from './services/usuario.service';

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';

import { CursosComponent } from './components/cursos/cursos.component';

//import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    UsuariosComponent,
    AgregarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'DEMO'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
