import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaServicios, Servicio } from '../interfaces/servicio';

/**
 * Servicio que adminstra los datos de los servicios de la peluqueria.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioServicioService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Retorna una lista de servicios disponibles en la bbdd.
 *
 * @returns Lista de servicios.
 */
  getServicios(): Observable<ListaServicios> {
    return this.http.get<ListaServicios>('/servicios');
  }

/**
 * Obtiene los datos de un servicio de la bbdd.
 *
 * @param {number} id  Id del servicio.
 * @returns servicio seleccionado.
 */
  getServicio(id: number): Observable<Servicio> {
    return this.http.get<Servicio>('/servicio/' + id);
  }
}
