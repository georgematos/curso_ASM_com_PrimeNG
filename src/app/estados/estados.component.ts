import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../services/estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  public estados: Array<any>;

  constructor(
    private estadosService: EstadosService
  ) { }

  ngOnInit(): void {
  }

  public getEstados(): void {
    this.estadosService.getEstados()
      .subscribe((resp: Array<any>) => {
        this.estados = resp;
      });
  }

}
