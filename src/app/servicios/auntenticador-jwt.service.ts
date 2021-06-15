import { Injectable } from '@angular/core';

/**
 * Servicio para gestionar los tokens de usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class AuntenticadorJWTService {

  //jwtPorSesion: string = null;

/**
 * Metodo constructor de la clase
 */
  constructor() { }

/**
 * Metodo que almacena un token en el localStorage.
 * 
 * @param {string} token Token del usuario.
 */
  almacenaJWT(token: string) {
    //this.jwtPorSesion = token;
    localStorage.setItem("jwt", token);
  }

/**
 * Metodo que retorna el token de usuario.
 * 
 * @returns Un string del token de usuario.
 */
  recuperaJWT(): string {
    //return this.jwtPorSesion;
    return localStorage.getItem("jwt");
  }

/**
 * Metodo que elimina un token del localStorage.
 */
  eliminaJWT() {
    //this.jwtPorSesion = null;
    localStorage.removeItem("jwt");
  }
}
