import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establecimiento, ListaEstablecimientosBuscador } from '../interfaces/establecimiento';
import { ListaPeluqueroBuscador } from '../interfaces/peluquero';

  /**
 * Servicio que administra los datos de establecimientos.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioEstablecimientosService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Obtiene una lista de los establecimientos de la bbdd.
 *
 * @returns Lista de establecimientos.
 */
  getAllPeluqueriasBuscador(): Observable<ListaEstablecimientosBuscador> {
    return this.http.get<ListaEstablecimientosBuscador>('/establecimiento/all')
  }

/**
 * Obtiene una lista de establecimientos según un termino buscado.
 *
 * @param {string} termino Termino para buscar establecimientos.
 * @returns Lista de establecimientos.
 */
  getPeluqueriasFromBuscador(termino: string): Observable<ListaEstablecimientosBuscador> {
    return this.http.get<ListaEstablecimientosBuscador>('/establecimiento/buscar/' + termino);
  }

/**
 * Obtiene los datos de un establecimiento.
 *
 * @param {number} id Id del establecimiento.
 * @returns Un establecimiento
 */
  getPeluqueria(id: number): Observable<Establecimiento> {
    return this.http.get<Establecimiento>('/establecimiento/' + id);
  }

/**
 * Obtiene una lista de peluqueros del establecimiento.
 *
 * @param {number} id Id del establecimiento.
 * @returns Lista de peluqueros.
 */
  getPeluquerosOfEstablecimiento(id: number): Observable<ListaPeluqueroBuscador>{
    return this.http.get<ListaPeluqueroBuscador>('/establecimiento/peluqueros/' + id);
  }
}
