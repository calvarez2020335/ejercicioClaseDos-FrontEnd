import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Sucursales } from '../models/sucursales.model'

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public url : String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) { }

  IngresarSucursales(modeloSucursales: Sucursales, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )
    let parametros = JSON.stringify(modeloSucursales);

    return this._http.post(this.url + '/agregarSucursales', parametros, { headers: headersToken })
  }

  obtenerSucursales(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )
    return this._http.get(this.url + '/Sucursales', { headers: headersToken});
  }

}
