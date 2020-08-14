import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import { EstadosRoutingModule } from './estados.routing.module';
import { EstadosService } from '../services/estados.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [EstadosComponent],
  imports: [
    CommonModule,
    EstadosRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ], 
  providers: [
    EstadosService
  ]
})
export class EstadosModule { }
