import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritoMin } from '../interfaces/favorito';
import { ListaFavoritos } from '../interfaces/lista-favoritos';

/**
 * Servicio para administrar favoritos
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {

/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Retorna una lista de favoritos del cliente.
 *
 * @returns Lista de favoritos.
 */
  getFavoritos(): Observable<ListaFavoritos> {
    return this.http.get<ListaFavoritos>('/cliente/favoritos');
  }

/**
 * Obtiene favorito del servidor
 *
 * @param {number} idpelu  Id del peluquero.
 * @returns Datos del favorito.
 */
  getFavorito(idpelu: number): Observable<FavoritoMin> {
    return this.http.get<FavoritoMin>('/favorito/obtener/' + idpelu);
  }

/**
 * Crea un nuevo favorito en la bbdd.
 *
 * @param {number} idpelu Id del peluquero.
 * @returns retorna el nuevo favorito creado.
 */
  crearFavorito(idpelu: number): Observable<FavoritoMin> {
    return this.http.get<FavoritoMin>('/favorito/crear/' + idpelu);
  }

/**
 * Elimina un favorito de la bbdd
 *
 * @param {number} id Id del favorito.
 */
  eliminarFavorito(id: number): Observable<Object> {
    return this.http.delete<Object>('/favorito/eliminar/' + id);
  }
}
