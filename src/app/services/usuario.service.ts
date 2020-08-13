import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    return new Usuario({
      nome: "george", 
      email:'georgemattos@gmail.com',
    });
  }
}
