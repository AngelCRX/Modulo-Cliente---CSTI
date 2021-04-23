import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UsuarioInterface } from '../models/usuarioInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosCollection: AngularFirestoreCollection<UsuarioInterface>;
  usuarios: Observable<UsuarioInterface[]>;
  usuarioDoc: AngularFirestoreDocument<UsuarioInterface>;

  constructor(public afs: AngularFirestore) {
    //this.usuarios = afs.collection('usuarios').valueChanges();
    this.usuariosCollection = afs.collection<UsuarioInterface>('cursos', ref => ref.orderBy('fecha', 'desc'));
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UsuarioInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUsuarios() {
    return this.usuarios;
  }
}
