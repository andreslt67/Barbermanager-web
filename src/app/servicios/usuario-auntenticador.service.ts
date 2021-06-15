import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';
import { DatosJwt } from '../interfaces/datos-jwt';

/**
 * Servicio que se encarga de gestionar los datos del usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class UsuarioAuntenticadorService {
  
/**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Comprueba los datos del usuario y si son correctos lo retorna.
 *
 * @param {string} usuario  usuario del cliente.
 * @param {string} clave Clave del cliente.
 * @returns id del usuario auntenticado.
 */
  autenticaUsuario (usuario: string, clave: string) : Promise<DatosJwt> {
    var jsonObject = {
      usuario: usuario,
      clave: clave
    };

    return this.http.post<DatosJwt>('/cliente/auntentica', jsonObject).toPromise(); 
  }

/**
 * Obtiene los datos del usuario.
 *
 * @returns Usuario auntenticado.
 */
  getUsuarioAutenticado(): Observable<Cliente> {
    
    return this.http.get<Cliente>('/cliente/persona');
  }

/**
 * Crea un nuevo con los datos enviados al servidor en la bbdd.
 *
 * @param {string} usuario Usuario del cliente.
 * @param {string} clave Clave del cliente.
 * @param {string} email Email del cliente.
 * @param {string} nombre Nombre del cliente.
 */
  registrarUsuario(usuario: string, clave: string, email: string, nombre: string): Promise<Object> {
    var jsonObject = {
      usuario: usuario,
      clave: clave,
      email: email,
      nombre: nombre
    };

    return this.http.post<Object>('/cliente/registrar', jsonObject).toPromise();
  }

/**
 * Actualiza los datos de un usuario de la bbdd.
 *
 * @param {string} usuario Usuario del cliente.
 * @param {string} clave Clave del cliente.
 * @param {string} email Email del cliente.
 * @param {string} nombre Nombre del cliente.
 */
  updateUsuario(usuario: string, clave: string, email: string, nombre: string): Observable<object> {
    var jsonObject = {
      usuario: usuario,
      clave: clave,
      email: email,
      nombre: nombre
    };

    return this.http.post('/cliente/actualizar', jsonObject);
  }
}
