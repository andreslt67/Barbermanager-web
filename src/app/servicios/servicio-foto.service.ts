import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaFoto } from '../interfaces/lista-foto';

/**
 * Servicio que administra las fotos
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioFotoService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Retorna una lista de fotos de un peluquero.
 *
 * @param {number} id  Id del peluquero.
 * @returns Lista de fotos.
 */
  getFotos(id: number): Observable<ListaFoto>{
    return this.http.get<ListaFoto>('/peluquero/fotos/' + id);
  }
}
