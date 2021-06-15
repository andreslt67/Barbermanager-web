import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPeluqueroBuscador, Peluquero } from '../interfaces/peluquero';

/**
 * Servicio que administra los datos del peluquero.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioPeluquerosService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Retorna una lista de peluqueros.
 *
 * @returns Lista de peluqueros.
 */
  getAllPeluquerosBuscador(): Observable<ListaPeluqueroBuscador> {
    return this.http.get<ListaPeluqueroBuscador>('/peluquero/all')
  }

/**
 * Retorna una lista de peluqueros segun el termino pasado por parametro.
 *
 * @param {string} termino  Termino para buscar peluqueros en la bbdd.
 * @returns Lista de peluqueros.
 */
  getPeluquerosFromBuscador(termino: string): Observable<ListaPeluqueroBuscador> {
    return this.http.get<ListaPeluqueroBuscador>('/peluquero/buscar/' + termino);
  }

/**
 * Obtiene los datos de un peluquero del servidor
 *
 * @param {number} id Id del peluquero.
 * @returns peluquero encontrado.
 */
  getPeluquero(id: number): Observable<Peluquero> {
    return this.http.get<Peluquero>('/peluquero/get/' + id);
  }
}
