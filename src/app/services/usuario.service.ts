import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    return new Usuario({
      nome: "George", 
      email:'georgemattos@gmail.com',
    });
  }

  public getUsuarios(): Array<Usuario> {
    return [
      new Usuario({nome: "Laura", email: "laura@email.com"}),
      new Usuario({nome: "Seth", email: "seth@email.com"}),
      new Usuario({nome: "Birdie", email: "birdie@email.com"}),
      new Usuario({nome: "Ryu", email: "ryu@email.com"}),
      new Usuario({nome: "Juri", email: "juri@email.com"}),
      new Usuario({nome: "Chun-li", email: "chunli@email.com"}),
    ];
  }
}
