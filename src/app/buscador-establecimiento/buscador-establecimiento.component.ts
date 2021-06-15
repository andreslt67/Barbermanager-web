import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Establecimiento, EstablecimientoBuscador } from '../interfaces/establecimiento';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';

/**
 * Componente con un buscador de establecimientos
 */
@Component({
  selector: 'app-buscador-establecimiento',
  templateUrl: './buscador-establecimiento.component.html',
  styleUrls: ['./buscador-establecimiento.component.css']
})
export class BuscadorEstablecimientoComponent implements OnInit, CanActivate {

  /**
   * Lista de establecimientos
   */
  peluquerias: Array<EstablecimientoBuscador>;

  /**
   * termino para buscar establecimientos
   */
  termino: string = null;

  /**
   * Metodo constructor de la clase
   *
   * @param {ServicioEstablecimientosService} servicioPelu  Servicio inyectado de establecimientos.
   * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
   * @param {Router} route Servicio inyectado para la navegacion.
   * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
   */
  constructor(private servicioPelu: ServicioEstablecimientosService, private servicioAlertas: AlertasService, private route: Router, private servicioJWT: AuntenticadorJWTService) {
    this.peluquerias = new Array<EstablecimientoBuscador>();
    this.canActivate();
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
   * Metodo OnInit que se encarga de cargar los establecimientos al estar listo los componentes angular.
   */
  ngOnInit(): void {
    this.cargarPeluquerias();
  }

  /**
   * Metodo para cargar los establecimientos obtenidos del servicio.
   */
  cargarPeluquerias() {
    this.servicioPelu.getAllPeluqueriasBuscador().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de peluquerias");
      }
      else {
        data.resultados.forEach(resultado => this.peluquerias.push(resultado));
      }
    });
  }

  /**
   * Metodo para cargar las pelquerias obtenidas del servicio.
   */
  buscarPeluquerias() {
    this.peluquerias.splice(0, this.peluquerias.length);
    this.servicioPelu.getPeluqueriasFromBuscador(this.termino).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de peluquerias");
      }
      else {
        data.resultados.forEach(resultado => this.peluquerias.push(resultado));
      }
    });
  }

  /**
   * Metodo que navega hacia el componente establecimiento.component
   *
   * @param {Establecimiento} peluqueria que se pasa para obtener sus datos en el componente.
   */
  toPeluqueria(peluqueria: Establecimiento) {
    this.route.navigate(['/establecimiento/peluqueria', peluqueria]);
  }

}
