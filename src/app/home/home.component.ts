import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: Usuario;
  private usuarioService = new UsuarioService();

  constructor() { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuario();
  }

}
