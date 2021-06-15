import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { Establecimiento } from '../interfaces/establecimiento';
import { Peluquero, PeluqueroBuscador } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';

 /**
 * Componente principal de los establecimientos.
 */
@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit, CanActivate {

   /**
 * Establecimiento pasado por parámetro.
 */
  establecimiento: Establecimiento;

   /**
 * Lista de peluqueros del establecimiento.
 */
  peluqueros: Array<PeluqueroBuscador>;

   /**
 * Indica el color de fondo de las pestañas.
 */
  background: ThemePalette = undefined;

   /**
 * Indica el color de las pestañas.
 */
  color: ThemePalette = "warn"

  
  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioEstablecimiento  Servicio inyectado de establecimientos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 * @param {ActivatedRoute} rutaActiva Servicio para obtener los parametros de una ruta.
 */
  constructor(private servicioAlertas: AlertasService, private servicioEstablecimiento: ServicioEstablecimientosService, private rutaActiva: ActivatedRoute,
    private route: Router, private servicioJWT: AuntenticadorJWTService) {
    this.peluqueros = new Array<PeluqueroBuscador>();
    this.canActivate();
   }

  /**
 * Metodo OnInit que se encarga de cargar los establecimientos al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      this.obtenerDatosEstablecimiento(params as Establecimiento);
    });
  }

   /**
 * Metodo guardian que decide si se puede acceder o no a este componente
 * 
 * @returns Boolean true o false dependiendo si puedes acceder al componente o no
 */
  canActivate() {
    if (this.servicioJWT.recuperaJWT() == null) {
      this.route.navigate(['/']);
      this.servicioAlertas.openSnackBar("Primero Inicia sesión");
      return false;
    }
    else {
      return true;
    }
  }

  /**
   * Obtiene los datos del establecimiento pasado por parametro.
   *
   * @param {Establecimiento} peluqueria para contener los datos del servicio.
   */
  obtenerDatosEstablecimiento(peluqueria: Establecimiento) {
    this.servicioEstablecimiento.getPeluqueria(peluqueria.idestablecimiento).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener datos de la peluqueria")
      }
      else {
        this.establecimiento = data;
        this.cargarDatosPeluquero(this.establecimiento.idestablecimiento);
      }
    })
  }

  /**
 * Obtiene la lista de peluqueros del establecimiento.
 *
 * @param {number} id  Id del establecimiento.
 */
  cargarDatosPeluquero(id: number) {
    this.servicioEstablecimiento.getPeluquerosOfEstablecimiento(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener peluqueros")
      }
      else {
        data.resultados.forEach(resultado => this.peluqueros.push(resultado));
      }
    })
  }

  /**
 * Navega hacia el componente peluquero.component
 *
 * @param {Peluquero} peluquero datos del peluquero para enviarlos al componente.
 */
  toPeluquero(peluquero: Peluquero) {
    this.route.navigate(['peluquero/peluquero', peluquero]);
  }

}
