import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuarioInterface';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioInterface[];
  editState: boolean = false;
  usuarioToEdit: UsuarioInterface;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      //console.log('xd');
      //console.log(usuarios);
      this.usuarios = usuarios;
    })
  }

  editCurso(event, usuario: UsuarioInterface) {
    this.editState = true;
    this.usuarioToEdit = usuario;
  }
  onUdpdateCurso(usuario: UsuarioInterface) {
    //this.usuarioService.updateUsuario(usuario);
    this.clearState();
  }
  deleteCurso(event, usuario: UsuarioInterface) {
    //this.usuarioService.deleteUsuario(usuario);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.usuarioToEdit = null;
  }

}
