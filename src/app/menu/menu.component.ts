import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Usuário',
        icon: 'pi pi-user',
        routerLink: 'usuario'
      },
      {
        label: 'Estados',
        icon: 'pi pi-map-marker',
        routerLink: 'estados'
      }
    ]
  }

}
