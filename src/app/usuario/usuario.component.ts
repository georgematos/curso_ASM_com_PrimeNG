import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public usuarios: Array<Usuario>;
  private usuarioService = new UsuarioService();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuario();
    this.usuarios = this.usuarioService.getUsuarios();
  }

}
