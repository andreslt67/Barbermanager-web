import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Cliente } from '../interfaces/cliente';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { UsuarioAuntenticadorService } from '../servicios/usuario-auntenticador.service';

/**
 * Metodo que muestra la interfaz del usuario.
 */
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, CanActivate {

/**
 * Cliente auntenticado que almacena los datos del usuario.
 */
  clienteAuntenticado: Cliente;
/**
 * variable que almacena el color de fondo del menu de pestañas.
 */
  background: ThemePalette = undefined;
  /**
 * Variable que almacena el color de las pestañas.
 */
  color: ThemePalette = "warn"

/**
 * Metodo constructor de la clase
 *
 * @param {UsuarioAuntenticadorService} servicioUsuario Servicio inyectado de usuario.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} router Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioUsuario: UsuarioAuntenticadorService, private servicioAlertas: AlertasService, private servicioJWT: AuntenticadorJWTService, private router: Router) { 
    this.canActivate();
  }

  /**
 * Metodo OnInit que se encarga de cargar los datos del usuario al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.obtenerDatosCliente();
  }

  /**
 * Metodo guardian que decide si se puede acceder o no a este componente
 * 
 * @returns Boolean true o false dependiendo si puedes acceder al componente o no
 */
  canActivate() {
    if (this.servicioJWT.recuperaJWT() == null) {
      this.router.navigate(['/']);
      this.servicioAlertas.openSnackBar("Primero Inicia sesión");
      return false;
    }
    else {
      return true;
    }
  }

  /**
 * Metodo que se encarga de obtener los datos del usuario del servicio.
 */
  obtenerDatosCliente() {
    this.servicioUsuario.getUsuarioAutenticado().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener datos de usuario")
      }
      else {
        this.clienteAuntenticado = data;
      }
    })
  }

}
