import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Peluquero, PeluqueroBuscador } from '../interfaces/peluquero';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

  /**
 * Componente con un buscador de peluqueros.
 */
@Component({
  selector: 'app-buscador-peluquero',
  templateUrl: './buscador-peluquero.component.html',
  styleUrls: ['./buscador-peluquero.component.css']
})
export class BuscadorPeluqueroComponent implements OnInit, CanActivate {

    /**
 * Lista de peluqueros obtenida del servicio.
 */
  peluqueros: Array<PeluqueroBuscador>;

    /**
 * Termino usado para buscar peluqueros.
 */
  termino: string = null;

    /**
 * Metodo constructor de la clase
 *
 * @param {ServicioPeluquerosService} servicioPelu  Servicio inyectado de peluqueros.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioPelu: ServicioPeluquerosService, private servicioAlertas: AlertasService, private route: Router, private servicioJWT: AuntenticadorJWTService) {
    this.peluqueros = new Array<PeluqueroBuscador>();
    this.canActivate();
   }
  
  /**
 * Metodo OnInit que se encarga de cargar los peluqueros al estar listos los componentes angular.
 */
  ngOnInit(): void {
    this.cargarPeluqueros();
  }

  
 /**
 * Metodo guardian que decide si se puede acceder o no a este componente
 * 
 * @returns Boolean true o false dependiendo si puedes acceder al componente o no
 */
  canActivate() {
    console.log(this.servicioJWT.recuperaJWT());
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
 * Metodo que obtiene los peluqueros del servicio
 */
  cargarPeluqueros() {
    this.servicioPelu.getAllPeluquerosBuscador().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de peluqueros");
      }
      else {
        data.resultados.forEach(resultado => this.peluqueros.push(resultado));
      }
    });
  }

  /**
 * Metodo para buscar peluqueros en la bbdd.
 */
  buscarPeluqueros() {
    this.peluqueros.splice(0, this.peluqueros.length);
    this.servicioPelu.getPeluquerosFromBuscador(this.termino).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de peluqueros");
      }
      else {
        data.resultados.forEach(resultado => this.peluqueros.push(resultado));
      }
    });
  }

  /**
 * Metodo que navega hacia el componente peluquero.component
 *
 * @param {Peluquero} peluquero que se pasa para obtener los datos en el componente.
 */
  toPeluquero(peluquero: Peluquero) {
    this.route.navigate(['/peluquero/peluquero', peluquero]);
  }

}
