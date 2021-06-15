import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AlertasService } from './alertas.service';
import { AuntenticadorJWTService } from './auntenticador-jwt.service';

/**
 * Servicio que administra los guards de la aplicacion.
 */
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanLoad{

  /**
 * Metodo constructor de la clase
 *
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioJWT: AuntenticadorJWTService, private router: Router, private servicioAlertas: AlertasService) { }
  
/**
 * Metodo que valida la entrada a algun componente.
 */
  canLoad(route: Route): boolean {
    if (this.servicioJWT.recuperaJWT() == null) {
      alert(this.servicioJWT.recuperaJWT);
      this.router.navigate(['/inicio']);
      this.servicioAlertas.openSnackBar("Primero debes iniciar sesión");
    }
    return (this.servicioJWT.recuperaJWT() != null);
  }
}
