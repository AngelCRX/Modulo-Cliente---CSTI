//import { Component } from '@angular/core';


//export class AppComponent {
//  title = 'DEMO';
//}
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from './models/usuarioInterface';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//@Component({
//  selector: 'app-root',
//  templateUrl: './components/usuarios/usuarios.component.html',
//  styleUrls: ['./components/usuarios/usuarios.component.css']
//})
export class AppComponent implements OnInit {

  usuarios: UsuarioInterface[];
  editState: boolean = false;
  usuarioToEdit: UsuarioInterface;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      //console.log('xd');
      console.log(usuarios);
      this.usuarios = usuarios;
    })
  }

  editUsuario(event, usuario: UsuarioInterface) {
    this.editState = true;
    this.usuarioToEdit = usuario;
  }
  onUdpdateUsuario(usuario: UsuarioInterface) {
    //this.usuarioService.updateUsuario(usuario);
    this.clearState();
  }
  deleteUsuario(event, usuario: UsuarioInterface) {
    //this.usuarioService.deleteUsuario(usuario);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.usuarioToEdit = null;
  }

}
