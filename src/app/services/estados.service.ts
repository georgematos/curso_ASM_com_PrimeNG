import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private urlApi = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getEstados(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlApi);
  }

}
