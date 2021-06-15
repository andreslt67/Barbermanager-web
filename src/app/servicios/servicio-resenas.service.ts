import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaResenaPelu, ListaResenas } from '../interfaces/lista-resenas';

/**
 * Servicio que adminstra los datos de reseñas.
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioResenasService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) {
  }

/**
 * Retorna una lista de reseñas del cliente
 *
 * @returns Lista de reseñas
 */
  getResenas(): Observable<ListaResenas> {
    return this.http.get<ListaResenas>('/cliente/resenas');
  }

/**
 * Retrona una lista de reseñas del peluquero.
 *
 * @param {number} id Id del peluquero.
 * @returns Lista de reseñas
 */
  getResenasPelu(id: number): Observable<ListaResenaPelu> {
    return this.http.get<ListaResenaPelu>('/peluquero/resenas/' + id);
  }

/**
 * Crea reseñas en la bbdd con los datos enviados al servidor
 *
 * @param {number} idpelu Id del peluquero.
 * @param {string} contenido contenido de la reseña.
 * @param {number} valoracion Valoracion de la reseña.
 */
  crearResena(idpelu: number, contenido: string, valoracion: number): Observable<Object> {
    var jsonObject = {
      idpeluquero: idpelu,
      contenido: contenido,
      valoracion: valoracion
    }

    return this.http.post<Object>('/resena/crear', jsonObject);
  }

/**
 * Elimina una reseña de la bbdd.
 *
 * @param {number} id Id de la reseña.
 */
  eliminarResena(id: number): Observable<Object> {
    return this.http.delete<Object>('/resena/eliminar/' + id);
  }
}
